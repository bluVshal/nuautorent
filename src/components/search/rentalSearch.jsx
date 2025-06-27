import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
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
    const [isFormReset, setIsFormReset] = useState('true');
    const rentalStatus = useSelector(state => state.rental.status);
    const resetAll = () => {

    };
    const searchUser = () => {
        setIsFormReset(false);
        dispatch(fetchSomeRental());
    };


    return (
        <div>
            <div className='search-main-container'>
                <h4 className='header-text'> Rental Search </h4>
                <Button raised label={rentalStatus === 'loading' ? 'Searching...' : 'Search'} disabled={rentalStatus === 'loading'} onClick={searchUser} />
                <Button label={t('buttons.reset')} disabled={rentalStatus === 'loading'} onClick={resetAll}></Button>
            </div>
        </div>
    )
};

export default RentalSearch;
