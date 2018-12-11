import React from 'react';
import {connect} from 'react-redux';
import BlankHeader from './Header/BlankHeader';
import { startLogin } from '../actions/auth';
import CompanyLoginForm from './CompanyLoginForm';

export class CompanyLoginPage extends React.Component{
    onSubmit= (companyAuth)=>{
        console.log(companyAuth);
        this.props.startLogin(companyAuth);
        this.props.history.push('/company-login/dashboard');
    };

    render(){
        return(
            <div>
                <BlankHeader />
                <CompanyLoginForm 
                    onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch) => ({
    startLogin: (companyAuth) => dispatch(startLogin(companyAuth))
});

export default connect(undefined,mapDispatchToProps)(CompanyLoginPage);

