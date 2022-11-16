import React from 'react';
import { format } from 'date-fns';

const AppointmentModal = ({details, selectedDate, setDetails}) => {
    const {name, slots} = details;
    const date = format(selectedDate , 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const slot = form.slot.value;
        console.log(name, phone, email, slot, date);
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
    <form onSubmit={handleBooking} className='grid gap-5'>
  <input disabled type="text" placeholder="Type here" className="input input-bordered w-full " value={date} />
  <select name='slot' className="select select-bordered w-full">
  {
    slots.map((slot, i) => <option key={i}>{slot}</option>)
  }
</select>
  <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full " />
  <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full " />
  <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full " />
  <input className='btn btn-primary text-white' type="submit" value="Submit" />
  </form>
  </div>
  
</div>
        </div>
    );
};

export default AppointmentModal;