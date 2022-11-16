import React from 'react';

const Infocard = ({card}) => {
    const {img, title, description, bgColor} = card;
    return (
<div>
<div className={`card  lg:pl-6 text-white lg:card-side ${bgColor} shadow-xl`}>
  <figure><img className='pt-6' src={img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
  </div>
</div>
</div>
    );
};

export default Infocard;