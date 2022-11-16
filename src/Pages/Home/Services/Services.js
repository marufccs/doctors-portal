import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const services = [
        {
            "id": "01",
            "title" : "Fluoride Treatment",
            "description" : "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            "img" : fluoride
        },
        {
            "id": "02",
            "title" : "Cavity Filling",
            "description" : "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            "img" : cavity
        },
        {
            "id": "03",
            "title" : "Teeth Whitening",
            "description" : "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            "img" : whitening
        },
    ]

    return (
        <div className='mt-28'>
            <div className='text-center'>
<h3 className='text-lg font-bold text-primary'>Our Services</h3>
<h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
{
    services.map(service => <Service id={service.id} service={service}></Service>) 
}
            </div>
        </div>
    );
};

export default Services;