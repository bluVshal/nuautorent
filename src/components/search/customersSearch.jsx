import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const CustomersSearch = () => {
    const [t, i18n] = useTranslation("global");
    const customersStatus = useSelector(state => state.customers.status);
    const [isFormReset, setIsFormReset] = useState('true');

    const resetAllValuesToEmpty = () => {
        setCarMake('');
        setCarModel('');
        setCarNTARegNumber('');
        setCarRentPrice('0');
        setCarSelectedStatus(null);
        setCarSelectedType(null);
        setCarSelectedTransmission(null);
        setCarElectric(false);
        setCarHybrid(false);
    };
    const setDisplayValue = () => {

    };
    const searchCustomers = () => {
        setIsFormReset(false);
        dispatch(fetchSomeCars());
    };

    const resetAll = () => {
        setIsFormReset(true);
        resetAllValuesToEmpty();

    };

    return (
        <div>
            <div className='search-main-container'>
                <h4 className='header-text'>Customer Search</h4>
                <div className='search-item-container'>
                </div>
                <Button raised label={customersStatus === 'loading' ? 'Searching...' : 'Search'} disabled={customersStatus === 'loading'} onClick={searchCustomers} />
                <Button label={t('buttons.reset')} disabled={customersStatus === 'loading'} onClick={resetAll}></Button>
            </div>
        </div>
    )
}

export default CustomersSearch
