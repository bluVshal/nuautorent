import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { fetchSomeCustomers } from '../../api/slices/customersSlice';
import { useDispatch, useSelector } from 'react-redux';

const CustomersSearch = () => {
    const fNameInput = useRef(null);
    const [t, i18n] = useTranslation("global");
    const customersStatus = useSelector(state => state.customers.status);
    const [customerFName, setCustomerFName] = useState('');
    const [customerLName, setCustomerLName] = useState('');
    const [customerMName, setCustomerMName] = useState('');
    const [customerOName, setCustomerOName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerLoyalty, setCustomerLoyalty] = useState('');
    const [isFormReset, setIsFormReset] = useState('true');
    const dispatch = useDispatch();

    const resetAllValuesToEmpty = () => {
        setCustomerFName('');
        setCustomerLName('');
        setCustomerMName('');
        setCustomerOName('');
        setCustomerAddress('');
        setCustomerEmail('');
        setCustomerPhone('');
        setCustomerLoyalty('');
        fNameInput.current.focus();
    };
    const setDisplayValue = () => {

    };
    const searchCustomers = () => {
        setIsFormReset(false);
        dispatch(fetchSomeCustomers());
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
                    <label className='lbl-search-item' htmlFor="customerFName"> {t('api.customers.customerFName')} </label>
                    <InputText value={customerFName} ref={fNameInput} autoFocus className='txt-search-item' id="carmake" onChange={(event) => setCustomerFName(event.target.value)} />

                    <label className='lbl-search-item' htmlFor="customerLName"> {t('api.customers.customerLName')} </label>
                    <InputText value={customerLName} className='txt-search-item' id="carmake" onChange={(event) => setCustomerLName(event.target.value)} />

                    <label className='lbl-search-item' htmlFor="customerMName"> {t('api.customers.customerMName')} </label>
                    <InputText value={customerMName} className='txt-search-item' id="carmake" onChange={(event) => setCustomerMName(event.target.value)} />

                    <label className='lbl-search-item' htmlFor="customerOName"> {t('api.customers.customerOName')} </label>
                    <InputText value={customerOName} className='txt-search-item' id="carmake" onChange={(event) => setCustomerOName(event.target.value)} />
                </div>
                <div className='search-item-container'>
                    <label className='lbl-search-item' htmlFor="customerAddress"> {t('api.customers.customerAddress')} </label>
                    <InputText value={customerAddress} className='txt-search-item' id="customerAddress" onChange={(event) => setCustomerAddress(event.target.value)} />

                    <label className='lbl-search-item' htmlFor="customerEmail"> {t('api.customers.customerEmail')} </label>
                    <InputText value={customerEmail} className='txt-search-item' id="customerEmail" onChange={(event) => setCustomerEmail(event.target.value)} />

                    <label className='lbl-search-item' htmlFor="customerPhone"> {t('api.customers.customerPhone')} </label>
                    <InputText value={customerPhone} className='txt-search-item' id="customerPhone" onChange={(event) => setCustomerPhone(event.target.value)} />

                    <label className='lbl-search-item' htmlFor="customerLoyalty"> {t('api.customers.customerLoyalty')} </label>
                    <InputText value={customerLoyalty} className='txt-search-item' id="customerLoyalty" onChange={(event) => setCustomerLoyalty(event.target.value)} />

                </div>
                <Button raised label={customersStatus === 'loading' ? 'Searching...' : 'Search'} disabled={customersStatus === 'loading'} onClick={searchCustomers} />
                <Button label={t('buttons.reset')} disabled={customersStatus === 'loading'} onClick={resetAll}></Button>
            </div>
        </div>
    )
}

export default CustomersSearch
