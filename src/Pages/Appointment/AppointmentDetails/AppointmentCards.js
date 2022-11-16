import React from 'react';

const AppointmentCards = ({option, setDetails}) => {
    const {name, slots} = option;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="text-3xl">{name}</h2>
    <p>{slots.length > 0? slots[0] : 'Please choose another date'}</p>
    <p>{slots.length > 1? `${slots.length} spaces available`:`${slots.length} space available`}</p>
    <div className="card-actions justify-center">
      <label disabled={slots.length === 0} onClick={() => setDetails(option)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppointmentCards;