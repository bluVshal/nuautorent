import React from 'react'
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div>
            <p> {t('messages.error.notfound')} </p>
        </div>
    )
}

export default NotFound
