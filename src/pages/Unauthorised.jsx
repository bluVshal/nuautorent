import React from 'react'
import { useTranslation } from 'react-i18next';

const Unauthorised = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div>
            <p>{t('messages.error.unauthorized')}</p>
        </div>
    )
}

export default Unauthorised
