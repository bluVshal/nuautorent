import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { InputText } from 'primereact/inputtext';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSomeRental } from '../../api/slices/rentalSlice';

const schema = z.object({
    email: z.string().email().min(2),
    password: z.string().min(6)
});

const RentalSearch = () => {
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation("global");
    const customerNameInput = useRef(null);
    const [isFormReset, setIsFormReset] = useState('true');
    const rentalStatus = useSelector(state => state.rental.status);
    const [rentalPickupDate, setRentalPickUpDate] = useState('');
    const [rentalReturnDate, setRentalReturnDate] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [carRegNo, setCarRegNo] = useState('');
    const today = new Date();

    const resetAll = () => {
        setRentalPickUpDate('');
        setRentalReturnDate('');
        setCustomerName('');
        setCarRegNo('');
        customerNameInput.current.focus();
    };
    const searchRental = () => {
        setIsFormReset(false);
        setRentalPickUpDate('');
        setRentalReturnDate('');
        dispatch(fetchSomeRental());
    };


    return (
        <div>
            <div className='search-main-container'>
                <h4 className='header-text'> Rental Search </h4>
                <div className='search-item-container'>

                    <label className='lbl-search-item' htmlFor="customerName"> {t('api.rental.customerName')} </label>
                    <InputText value={customerName} ref={customerNameInput} autoFocus className='txt-search-item' id="customerName" onChange={(event) => setCustomerName(event.target.value)} />

                    <label className='lbl-search-item' htmlFor="carRegNo"> {t('api.rental.carRegNo')} </label>
                    <InputText value={carRegNo} className='txt-search-item' id="carRegNo" onChange={(event) => setCarRegNo(event.target.value)} />

                    <label className='lbl-search-item' htmlFor="rentalPickupDate"> {t('api.rental.rentalPickupDate')} </label>
                    <Calendar id="rentalPickupDate" className='txt-search-item date-search-item' panelClassName='date-search-panel' value={rentalPickupDate} onChange={(e) => setRentalPickUpDate(e.value)} showButtonBar />

                    <label className='lbl-search-item' htmlFor="rentalReturnDate"> {t('api.rental.rentalReturnDate')} </label>
                    <Calendar id="rentalReturnDate" className='txt-search-item date-search-item' panelClassName='date-search-panel' value={rentalReturnDate} onChange={(e) => setRentalReturnDate(e.value)} maxDate={today} showButtonBar />

                </div>
                <Button raised label={rentalStatus === 'loading' ? 'Searching...' : 'Search'} disabled={rentalStatus === 'loading'} onClick={searchRental} />
                <Button label={t('buttons.reset')} disabled={rentalStatus === 'loading'} onClick={resetAll}></Button>
            </div>
        </div>
    )
};

export default RentalSearch;
