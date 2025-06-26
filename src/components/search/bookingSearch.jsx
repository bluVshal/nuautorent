import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import { fetchSomeBooking } from '../../api/slices/bookingSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const BookingSearch = () => {
    const dispatch = useDispatch();
    const [isFormReset, setIsFormReset] = useState('true');
    const bookingStatus = useSelector(state => state.booking.status);
    const [t, i18n] = useTranslation("global");

    const searchBooking = () => {
        return true;
    };

    const resetAll = () => {
        return true;
    }

    return (
        <div>
            <div className='search-main-container'>
                <h4 className='header-text'>Booking Search</h4>
                <div className='search-item-container'>
                </div>
                <Button raised label={bookingStatus === 'loading' ? 'Searching...' : 'Search'} disabled={bookingStatus === 'loading'} onClick={searchBooking} />
                <Button label={t('buttons.reset')} disabled={bookingStatus === 'loading'} onClick={resetAll}></Button>
            </div>
        </div>
    )
}

export default BookingSearch
