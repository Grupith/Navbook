import React from 'react';
import kwiktriplogo from '../images/kwiktriplogo.png';
import maplogo from '../images/map.png';

function Card() {
    return (
        <div className='card'>
            <img src={kwiktriplogo} alt='kwiktriplogo' className='logo'/>
            <h2>Kwik Trip</h2>
            <img src={maplogo} alt='maplogo' className='maplogo' />
        </div>
    )
}

export default Card;
