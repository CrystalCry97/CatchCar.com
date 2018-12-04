import React from 'react';
import {connect} from 'react-redux';
import CompanyHeader from './CompanyHeader';
import CompanyAddCarForm from './CompanyAddCarForm';
import { startAddCar } from '../actions/cars';

export class CompanyAddCarPage extends React.Component{
    onSubmit= (car)=>{
        this.props.startAddCar(car);
        this.props.history.push('/company-login/dashboard');
    };
    render(){
        return(
            <div>
                <CompanyHeader/>
                <CompanyAddCarForm 
                    onSubmit= {this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    startAddCar: (car) => dispatch(startAddCar(car))
});

export default connect (undefined,mapDispatchToProps)(CompanyAddCarPage);