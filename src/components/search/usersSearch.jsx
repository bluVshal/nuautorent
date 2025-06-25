import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSomeUsers } from '../../api/slices/usersSlice';

const UsersSearch = () => {
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation("global");
    const [isFormReset, setIsFormReset] = useState('true');
    const usersStatus = useSelector(state => state.users.status);
    const resetAll = () => {

    };
    const searchUser = () => {
        setIsFormReset(false);
        dispatch(fetchSomeUsers());
    };


    return (
        <div>
            <div className='search-main-container'>
                <h4 className='header-text'> Users Search </h4>
                <Button raised label={usersStatus === 'loading' ? 'Searching...' : 'Search'} disabled={usersStatus === 'loading'} onClick={searchUser} />
                <Button label={t('buttons.reset')} disabled={usersStatus === 'loading'} onClick={resetAll}></Button>
            </div>
        </div>
    )
};

export default UsersSearch;
