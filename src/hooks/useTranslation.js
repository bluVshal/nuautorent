import React from 'react';
import { useTranslation } from 'react-i18next';

function UserProfile({ user }) {
    const { t } = useTranslation();

    return (
        <div>
            <p>{t('api.firstName')}: {user.firstName}</p>
            <p>{t('api.lastName')}: {user.lastName}</p>
            <p>{t('api.dateOfBirth')}: {user.dateOfBirth}</p>
        </div>
    );
}

export default UserProfile;