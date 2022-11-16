
import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Infocard from './Infocard';

const InfoCards = () => {
    const cards = [
        {
            "id" : "01",
            "title" : "Opening Hours",
            "description" : "Open from 9 am to 7 pm",
            "img" : clock,
            "bgColor" : "bg-gradient-to-r from-primary to-secondary"
        },
        {
            "id" : "02",
            "title" : "Visit our location",
            "description" : "Via Breno, 07, 20139, Milan",
            "img" : marker,
            "bgColor" : "bg-slate-700"
        },
        {
            "id" : "03",
            "title" : "Contact us now",
            "description" : "+393498137188",
            "img" : phone,
            "bgColor" : "bg-gradient-to-r from-primary to-secondary"
        },
    ]
    return (
        <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-20 mt-6'>
            {
                cards.map(card => <Infocard key={card.id} card={card}></Infocard>)
            }
        </div>
    );
};

export default InfoCards;