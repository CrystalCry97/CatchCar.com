import React from 'react';
import BlankHeader from './Header/BlankHeader';
import CompanySignUpForm from './CompanySignUpForm';

export class CompanySignUpPage extends React.Component{
    render(){
        return(
            <div>
                <BlankHeader/>
                <CompanySignUpForm />
            </div>  
        )
    }
}