import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { fetchSomeBooking } from '../../api/slices/bookingSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const BookingSearch = () => {
    const dispatch = useDispatch();
    const [isFormReset, setIsFormReset] = useState('true');
    const bookingStatus = useSelector(state => state.booking.status);
    const [bookingReturnDate, setBookingReturnDate] = useState();
    const [bookingPickUpDate, setBookingPickUpDate ] = useState();
    const [t, i18n] = useTranslation("global");

    const searchBooking = () => {
        setIsFormReset(false);
        dispatch(fetchSomeBooking());
    };

    const resetAll = () => {
        setIsFormReset(true);
        setBookingPickUpDate('');
        setBookingReturnDate('');
    }

    return (
        <div>
            <div className='search-main-container'>
                <h4 className='header-text'>Booking Search</h4>
                <div className='search-item-container'>
                    <label className='lbl-search-item' htmlFor="bookingPickUpDate"> {t('api.booking.bookingPickUpDate')} </label>
                    <Calendar id="bookingPickUpDate" className='txt-search-item' value={bookingPickUpDate} onChange={(e) => setBookingPickUpDate(e.value)} showButtonBar />
                    <label className='lbl-search-item' htmlFor="bookingReturnDate"> {t('api.booking.bookingReturnDate')} </label>
                    <Calendar id="bookingReturnDate" className='txt-search-item' value={bookingReturnDate} onChange={(e) => setBookingReturnDate(e.value)} showButtonBar />
                </div>
                <Button raised label={bookingStatus === 'loading' ? 'Searching...' : 'Search'} disabled={bookingStatus === 'loading'} onClick={searchBooking} />
                <Button label={t('buttons.reset')} disabled={bookingStatus === 'loading'} onClick={resetAll}></Button>
            </div>
        </div>
    )
}

export default BookingSearch
