import React from 'react';

export default class CompanySignUpForm extends React.Component{
    
    render(){
        return(
            <div className="row">
                <div className="column">
                    <form id="loginform" name="loginform" noValidate="validate">
                        <div className="container align-items-center">
                            <div className="col-sm-10">

                                {/*SIGN UP FORM*/}
                                <div className="form-group">
                                    <h2><p className="sansserif">Rental Company Sign Up Form</p></h2>

                                    <h5><p className= "sansserif"><b>Company Name: </b></p><input className="form-control" id="compname" type="text" placeholder="Murni Car Rental Centre"  /></h5>	    
                                </div>
                                <div className="form-group">
                                    <h5><p className= "sansserif"><b>Headquarters location: </b></p><input className="form-control" id="hq" type="text" placeholder="Shah Alam, Selangor"  /></h5>
                                </div>
                                <div className="form-group">
                                    <h5><p className= "sansserif"><b>Telephone Number: </b></p><input className="form-control" id="telno" type="text" placeholder="03XXXXXXXX"  /></h5>
                                </div>
                                <div className="form-group">
                                    <h5><p className= "sansserif"><b>Business License No: </b></p><input className="form-control" className="a" id="licenseno" type="text" placeholder="105015-K"  /></h5>
                                </div>
                                <div className="form-group">
                                    <h5><p className= "sansserif"><b>Email: </b></p><input className="form-control" id="email" type="text" placeholder="murni@gmail.com"  /></h5>
                                </div>
                                <div className="form-group">
                                    <h5><p className= "sansserif"><b>Password: </b></p><input className="form-control" id="password" type="password" placeholder="********"/></h5>
                                </div>
                                
                            </div>
                            <div className="clearfix">
                            </div>
                                {/*REGISTER BUTTON*/}
                                <div className="form-group ">
                                <div id="success"></div>
                                <button onClick={this.onSubmit}>REGISTER</button>     
                            </div>
                                    
                        </div>	
                    </form>
                </div>
                
            </div>
        )
    }
}