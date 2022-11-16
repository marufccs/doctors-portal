import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentCards from './AppointmentCards';
import AppointmentModal from './AppointmentModal';

const AppointmentDetails = ({selectedDate}) => {
    const [options, setOptions] = useState([]);
    const [details, setDetails] = useState({})
    useEffect(() => {
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setOptions(data))
    },[])

    return (
        <div className='my-16'>
            <div>
            <p className='text-center text-secondary'>You selected the date: {format(selectedDate, 'PP')}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6'>
        {
            options.map(option => <AppointmentCards key={option._id} option = {option} setDetails={setDetails}></AppointmentCards>)
        }
            </div>
            <AppointmentModal setDetails={setDetails} selectedDate={selectedDate} details={details}/>
        </div>
    );
};

export default AppointmentDetails;