import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentDetails from '../AppointmentDetails/AppointmentDetails';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <AppointmentDetails selectedDate={selectedDate}></AppointmentDetails>
        </div>
    );
};

export default Appointment;