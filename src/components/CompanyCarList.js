import React from 'react';
import { connect } from 'react-redux';
import CompanyCarListItem from './CompanyCarListItem'; 
import getVisibleCars from '../selectors/cars';

export const CompanyCarList = (props) =>(
    <div>

        <div className="companycarlist__container">
            {
                props.cars.length === 0 ? (
                    <p>No cars in the list</p>
                ):(    
                    props.cars.map((car) => {
                        return <CompanyCarListItem key={car.id} {...car}/>;
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps =(state) => {
    return {
        cars: getVisibleCars(state.cars, state.filters)
    };
};

export default connect(mapStateToProps)(CompanyCarList);