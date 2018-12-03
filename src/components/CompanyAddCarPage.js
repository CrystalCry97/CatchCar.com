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

// import React from 'react';
// import { connect } from 'react-redux';
// import CompanyHeader from './CompanyHeader';
// import CompanyAddCarForm from './CompanyAddCarForm';
// import { startAddCar, addCar } from '../actions/cars';


// const CompanyAddCarPage = (props) => (
//     <div>
//         <CompanyHeader/>
//         <h1>Add new car</h1>
//         <CompanyAddCarForm 
//             onSubmit= {(car) => {
//                 props.dispatch(addCar(car));
//                 props.history.push('/company-login/dashboard');
//             }}
//         />
//     </div>
// );

// export default connect()(CompanyAddCarPage);