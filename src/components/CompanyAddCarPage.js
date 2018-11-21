import React from 'react';
import { connect } from 'react-redux';
import CompanyHeader from './CompanyHeader';
import CompanyAddCarForm from './CompanyAddCarForm';
import { addCar } from '../actions/cars';


const CompanyAddCarPage = (props) => (
    <div>
        <CompanyHeader/>
        <h1>Add new car</h1>
        <CompanyAddCarForm 
            onSubmit= {(car) => {
                props.dispatch(addCar(car));
                props.history.push('/company-login/dashboard');
            }}
        />
    </div>
);

export default connect()(CompanyAddCarPage);