import React from 'react';
import {Link} from 'react-router-dom';

export default class CompanyLoginForm extends React.Component{

    state ={
        email:'',
        password:'',
        error:''
    }

    onEmailChange = (e) => {
        const email= e.target.value;
        this.setState(() => ({email}));
    }

    onPasswordChange = (e) => {
        const password= e.target.value;
        this.setState(() => ({password}));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.email){
            this.setState(()=> ({error: 'ERROR: Please provide email address'}));
        } else if(!this.state.password){
            this.setState(()=> ({error: 'ERROR: Please provide password'}));
        }else{
            this.setState(()=> ({error: ''}));
            this.props.onSubmit({
                email: this.state.email,
                password: this.state.password,
            });
        
        }
        console.log("submit something here");
    }

    render(){
        return(
            <div className="companyloginpage__column">
                <form id="loginform" noValidate="validate">
                    <div className="companyloginpage__container">
                        <div>
                        
                            <div className="companyloginpage__form-group">
                                <h2>Rental Company</h2>
                                {this.state.error && <p><b>{this.state.error}</b></p>}
                                <h3><b>Username: </b><input className="form-control" id="username" value={this.state.email} onChange={this.onEmailChange} type="text" placeholder="eg: CompanyA" required="required" data-validation-required-message="Please enter your username."/></h3>	    
                            </div>
                            
                            <div className="companyloginpage__form-group">
                                {/*PASSWORD*/}
                                <h3><b>Password: </b><input className="form-control" id="password" value={this.state.password} onChange={this.onPasswordChange} type="password" data-validation-required-message="Please enter your password correctly."/></h3>	
                            </div>
                            
                            {/*LOG IN BUTTON*/}
                            <div className="companyloginpage__form-group ">
                                <div id="success"></div>
                                {/*<Link to="/company-login/dashboard/" onClick={this.onSubmit} className="companyloginpage__btn" >Login</Link>*/}
                                <button onClick={this.onSubmit}>Login</button>
                            </div>

                            {/*SIGN UP LINK*/}
                            <h5><Link  to="/rentalcompsignup">Didn't have account? Sign up now</Link></h5>
                                
                        </div>		
                    </div>
                </form>				
            </div>	
        )
    }
}