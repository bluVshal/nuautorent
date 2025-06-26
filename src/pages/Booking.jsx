import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Search from '../components/search';

const Booking = () => {
    const [t, i18n] = useTranslation("global");
    const bookingStatus = useSelector(state => state.booking.status);
    const bookingArr = useSelector(state => state.booking.value);

    return (
        <div>
            <h1> BOOKING </h1>
            <div>
                <Search type="Booking" />
            </div>
            <div>
                {bookingStatus === 'succeeded' &&
                    <DataTable value={bookingArr} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                        {Object.keys(bookingArr[0]).map((objKey) => {
                            return <Column key={objKey} field={objKey} header={t("api.booking." + objKey)}></Column>
                        })}
                    </DataTable>
                }
            </div>
        </div>
    )
}

export default Booking
