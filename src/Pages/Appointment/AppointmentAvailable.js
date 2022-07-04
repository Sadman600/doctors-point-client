import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailService from './AvailService';
import BookingModal from './BookingModal';

const AppointmentAvailable = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    return (
        <div>
            <h1>You are Available On: {format(date, 'PP')} </h1>
            <div className='grid lg:grid-cols-3 gap-5 mx-20'>
                {
                    services.map(service => <AvailService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AvailService>)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment} date={date}></BookingModal>
            }
        </div>
    );
};

export default AppointmentAvailable;