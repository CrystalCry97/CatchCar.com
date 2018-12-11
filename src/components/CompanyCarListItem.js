import React from 'react';
import {Link} from 'react-router-dom';

const CompanyCarListItem = ({id, carBrand, carSeats, airConditioning, gearBox, location, pricePerDay, rating}) => (
    <div>
        <Link to={`/company-login/dashboard/edit-car/${id}`}>
            <h3>{carBrand}</h3>
        </Link>
        <p>Location: {location}</p>
        <p>Price per day: RM {pricePerDay/100}</p>
        <p>Rating: {rating}</p>
    </div>
);

export default CompanyCarListItem;