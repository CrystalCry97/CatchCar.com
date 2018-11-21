import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addCar} from './actions/cars';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; // see SingleDatePicker airbnb github

const store = configureStore();

const carOne= store.dispatch(addCar({
    carBrand:'Proton Saga', 
    carSeats:5,
    airConditioning:'cool',
    gearBox:'manual',
    location:'Shah Alam',
    pricePerDay: 11000,  //RM110.00
    availableOn: 131118,
    rating: 3.5
 }));
 const carTwo= store.dispatch(addCar({
    carBrand:'Toyota Innova', 
    carSeats:7,
    airConditioning:'super cool',
    gearBox:'auto',
    location:'KLIA',
    pricePerDay: 22000,  //RM220.00
    availableOn: 151118,
    rating: 4.7
 }));
 const carThree= store.dispatch(addCar({
    carBrand:'Proton Wira', 
    carSeats:5,
    airConditioning:'cool',
    gearBox:'manual',
    location:'Shah Alam',
    pricePerDay: 10000,  //RM100.00
    availableOn: 141118,
    rating: 4.1
 }));

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));