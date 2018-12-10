import React from 'react';
import { connect } from 'react-redux';
import CarListItem from './CarListItem'; 
import getVisibleCars from '../selectors/cars';

export const CarList = (props) =>(
    <div>
        <h1>Search Result</h1>
        <div className="carlist__container">
            {
                props.cars.length === 0 ? (
                    <p>No cars in the list</p>
                ):(                    
                    props.cars.map((car) => {
                        return <CarListItem key={car.id} {...car}/>;
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

export default connect(mapStateToProps)(CarList);