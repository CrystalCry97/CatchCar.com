import React from 'react';
import {connect} from 'react-redux';
import BlankHeader from './Header/BlankHeader';
import CompanySignUpForm from './CompanySignUpForm';
import {registerCompany} from '../actions/auth';

export class CompanySignUpPage extends React.Component{
    onSubmit= (companyInfo)=>{
        this.props.registerCompany(companyInfo);
        this.props.history.push('/company-login');
    };
    render(){
        return(
            <div>
                <BlankHeader/>
                <CompanySignUpForm
                onSubmit= {this.onSubmit} />

            </div>  
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    registerCompany: (companyInfo) => dispatch(registerCompany(companyInfo))
});

export default connect (undefined,mapDispatchToProps)(CompanySignUpPage);