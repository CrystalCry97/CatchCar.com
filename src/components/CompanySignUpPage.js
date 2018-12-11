import React from 'react';
import {connect} from 'react-redux';
import BlankHeader from './Header/BlankHeader';
import { registerCompany } from '../actions/auth';
import CompanySignUpForm from './CompanySignUpForm';

export class CompanySignUpPage extends React.Component{
    onSubmit= (companyInfo)=>{
        console.log(this.props);
        console.log(companyInfo.companyName);
        console.log(companyInfo.headquarters);
        console.log(companyInfo.telNo);
        console.log(companyInfo.licenseNo);
        console.log(companyInfo.email);
        console.log(companyInfo.password);
        this.props.registerCompany(companyInfo);
        this.props.history.push('/company-login');
    };

    render(){
        return(
            <div>
                <BlankHeader/>
                <CompanySignUpForm
                    onSubmit= {this.onSubmit} 
                />
            </div>  
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    registerCompany: (companyInfo) => dispatch(registerCompany(companyInfo))
});

export default connect (undefined,mapDispatchToProps)(CompanySignUpPage);