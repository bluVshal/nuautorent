import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { InputText } from 'primereact/inputtext';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSomeMaintenance } from '../../api/slices/maintenanceSlice';

const schema = z.object({
    email: z.string().email().min(2),
    password: z.string().min(6)
});

const MaintenanceSearch = () => {
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation("global");
    const [isFormReset, setIsFormReset] = useState('true');
    const maintenanceStatus = useSelector(state => state.maintenance.status);

    const resetAll = () => {

    };

    const searchMaintenance = () => {
        setIsFormReset(false);
        dispatch(fetchSomeMaintenance());
    }

    return (
        <div>
            <div className='search-main-container'>
                <h4 className='header-text'> Maintenance Search </h4>
                <Button raised label={maintenanceStatus === 'loading' ? 'Searching...' : 'Search'} disabled={maintenanceStatus === 'loading'} onClick={searchMaintenance} />
                <Button label={t('buttons.reset')} disabled={maintenanceStatus === 'loading'} onClick={resetAll}></Button>
            </div>
        </div>
    )
};

export default MaintenanceSearch;
