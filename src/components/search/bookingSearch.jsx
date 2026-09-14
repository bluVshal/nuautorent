import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { fetchSomeBooking } from '../../api/slices/bookingSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toDateParam } from '../../utils/date';
import ResultsTable from './ResultsTable';

const BookingSearch = () => {
    const dispatch = useDispatch();
    const customerNameInput = useRef(null);
    const [isFormReset, setIsFormReset] = useState('true');
    const bookingStatus = useSelector(state => state.booking.status);
    const bookingValue = useSelector(state => state.booking.value);
    const [bookingReturnDate, setBookingReturnDate] = useState('');
    const [bookingPickUpDate, setBookingPickUpDate] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [carRegNo, setCarRegNo] = useState('');
    const [t, i18n] = useTranslation("global");
    const today = new Date();

    const searchBooking = () => {
        setIsFormReset(false);
        dispatch(fetchSomeBooking({
            customerName,
            carRegNo,
            bookingPickUpDate: toDateParam(bookingPickUpDate),
            bookingReturnDate: toDateParam(bookingReturnDate),
        }));
    };

    const resetAll = () => {
        setIsFormReset(true);
        setBookingPickUpDate('');
        setBookingReturnDate('');
        setCarRegNo('');
        setCustomerName('');
        customerNameInput.current.focus();
    }

    return (
        <div>
            <div className='search-main-container'>
                <h4 className='header-text'>Booking Search</h4>
                <div className='search-item-container'>


                    <label className='lbl-search-item' htmlFor="customerName"> {t('api.booking.customerName')} </label>
                    <InputText value={customerName} ref={customerNameInput} autoFocus className='txt-search-item' id="customerName" onChange={(event) => setCustomerName(event.target.value)} />

                    <label className='lbl-search-item' htmlFor="carRegNo"> {t('api.booking.carRegNo')} </label>
                    <InputText value={carRegNo} className='txt-search-item' id="carRegNo" onChange={(event) => setCarRegNo(event.target.value)} />

                    <label className='lbl-search-item' htmlFor="bookingPickUpDate"> {t('api.booking.bookingPickUpDate')} </label>
                    <Calendar id="bookingPickUpDate" className='txt-search-item date-search-item' panelClassName='date-search-panel' value={bookingPickUpDate} onChange={(e) => setBookingPickUpDate(e.value)} showButtonBar />

                    <label className='lbl-search-item' htmlFor="bookingReturnDate"> {t('api.booking.bookingReturnDate')} </label>
                    <Calendar id="bookingReturnDate" className='txt-search-item date-search-item' panelClassName='date-search-panel' value={bookingReturnDate} onChange={(e) => setBookingReturnDate(e.value)} maxDate={today} showButtonBar />

                </div>
                <Button raised label={bookingStatus === 'loading' ? 'Searching...' : 'Search'} disabled={bookingStatus === 'loading'} onClick={searchBooking} />
                <Button label={t('buttons.reset')} disabled={bookingStatus === 'loading'} onClick={resetAll}></Button>
            </div>
            <ResultsTable value={bookingValue} status={bookingStatus} exclude={['createdDate', 'lastModifiedDate']} emptyMessage="No bookings found" />
        </div>
    )
}

export default BookingSearch
