import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { InputText } from 'primereact/inputtext';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSomeMaintenance } from '../../api/slices/maintenanceSlice';
import { toDateParam } from '../../utils/date';
import ResultsTable from './ResultsTable';
import MaintenanceAgencies from '../popups/maintenanceAgency';

const schema = z.object({
    email: z.string().email().min(2),
    password: z.string().min(6)
});

const MaintenanceSearch = () => {
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation("global");
    const [maintenanceStartDate, setMaintenanceStartDate] = useState("");
    const [maintenanceEndDate, setMaintenanceEndDate] = useState("");
    const [isFormReset, setIsFormReset] = useState('true');
    const [visible, setVisible] = useState(false);
    const maintenanceStatus = useSelector(state => state.maintenance.status);
    const maintenanceValue = useSelector(state => state.maintenance.value);

    const resetAll = () => {
        setMaintenanceStartDate('');
        setMaintenanceEndDate('');
    };

    const searchMaintenance = () => {
        setIsFormReset(false);
        dispatch(fetchSomeMaintenance({
            maintenanceStartDate: toDateParam(maintenanceStartDate),
            maintenanceEndDate: toDateParam(maintenanceEndDate),
        }));
    }
    const showMaintenanceAgencies = () => {
        setVisible(true);
    }

    return (
        <div>
            <div className='search-main-container'>
                <h4 className='header-text'> Maintenance Search </h4>
                <div className='search-item-container'>
                    <label className='lbl-search-item' htmlFor="maintenanceStartDate"> {t('api.maintenance.maintenanceStartDate')} </label>
                    <Calendar id="maintenanceStartDate" className='txt-search-item date-search-item' panelClassName='date-search-panel' value={maintenanceStartDate} onChange={(e) => setMaintenanceStartDate(e.value)} showButtonBar />
                    <label className='lbl-search-item' htmlFor="maintenanceEndDate"> {t('api.maintenance.maintenanceEndDate')} </label>
                    <Calendar id="maintenanceEndDate" className='txt-search-item date-search-item' panelClassName='date-search-panel' value={maintenanceEndDate} onChange={(e) => setMaintenanceEndDate(e.value)} showButtonBar />
                </div>
                <Button raised label={maintenanceStatus === 'loading' ? 'Searching...' : 'Search'} disabled={maintenanceStatus === 'loading'} onClick={searchMaintenance} />
                <Button label={t('buttons.reset')} disabled={maintenanceStatus === 'loading'} onClick={resetAll}></Button>
                <Button label={t('buttons.maintenanceAgencies')} disabled={maintenanceStatus === 'loading'} onClick={showMaintenanceAgencies}></Button>
                <Dialog className='modal-container' header='AAA' visible={visible} onHide={() => { if (!visible) return; setVisible(false); }}>
                    <MaintenanceAgencies />
                </Dialog>

            </div>
            <ResultsTable value={maintenanceValue} status={maintenanceStatus} exclude={['createdDate', 'lastModifiedDate']} emptyMessage="No maintenance records found" />
        </div>
    )
};

export default MaintenanceSearch;
