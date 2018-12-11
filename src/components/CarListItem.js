import React from 'react';

const CarListItem = ({carBrand, carSeats, airConditioning, gearBox, location, pricePerDay, rating}) => (
    <div className="carlistitem__cardview">
        <div >
            <img className="carlistitem_image" src="../../images/bezza.jpg"/>
        </div>
        <div >
            <h2>{carBrand}</h2>
            <p>Seats: {carSeats} | Air conditioning: {airConditioning}</p>
            <p>Gearbox: {gearBox}</p>
            <p>Location: {location}</p>
            <p>Rating: {rating}</p>
            <p>Price per day: RM {pricePerDay/100}</p>
            <button>Book Now!</button>
            <br/> 
        </div>    
    </div>
);

export default CarListItem;