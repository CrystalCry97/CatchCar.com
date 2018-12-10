import React from 'react';

export default class CompanySignUpForm extends React.Component{
    
state = {
    companyName:'',
    headquarters:'',
    telNo:'',
    licenseNo:'',
    email:'',
    password:'',
    error:''

};

companyNameChange= (e) =>{
    const companyName =e.target.value;
    this.setState(()=> ({companyName}));
};

headquartersChange= (e) =>{
    const headquarters =e.target.value;
    this.setState(()=> ({headquarters}));
};
telNoChange= (e) =>{
    const telNo =e.target.value;
    this.setState(()=> ({telNo}));
};
licenseNoChange= (e) =>{
    const licenseNo =e.target.value;
    this.setState(()=> ({licenseNo}));
};
emailChange= (e) =>{
    const email =e.target.value;
    this.setState(()=> ({email}));
};

password= (e) =>{
    const password =e.target.value;
    this.setState(()=> ({password}));
};
onSubmit = (e) =>{
    e.preventDefault();

    if(!this.state.companyName){
        this.setState(()=> ({error: 'ERROR: Please provide company name'}));
    } else if(!this.state.headquarters){
        this.setState(()=> ({error: 'ERROR: Please provide headquarters location'}));
    } else if(!this.state.telNo){
        this.setState(()=> ({error: 'ERROR: Please provide telephone number'}));
    } else if(!this.state.licenseNo){
        this.setState(()=> ({error: 'ERROR: Please provide lisence no'}));
    }else if(!this.state.email){
        this.setState(()=> ({error: 'ERROR: Please provide email'}));
    }else if(!this.state.password){
        this.setState(()=> ({error: 'ERROR: Please provide password'}));
    } else{
        this.setState(()=> ({error: ''}));
        this.props.onSubmit({
            companyName: this.state.companyName,
            headquarters: this.state.headquarters,
            telNo: this.state.telNo,
            licenseNo: this.state.licenseNo,
            email: this.state.email,
            password: this.state.password,
            
        });
    }
};

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
                                    {this.state.error}
                                    <h5><p className= "sansserif"><b>Company Name: </b></p><input className="form-control" value = {this.state.companyName} onChange={this.companyNameChange} type="text" placeholder="Murni Car Rental Centre"  /></h5>	    
                                </div>
                                <div className="form-group">
                                    <h5><p className= "sansserif"><b>Headquarters location: </b></p><input className="form-control"  type="text" value = {this.state.headquarters} onChange={this.headquartersChange} placeholder="Shah Alam, Selangor"  /></h5>
                                </div>
                                <div className="form-group">
                                    <h5><p className= "sansserif"><b>Telephone Number: </b></p><input className="form-control" value = {this.state.telNo} onChange={this.telNoChange} type="text" placeholder="03XXXXXXXX"  /></h5>
                                </div>
                                <div className="form-group">
                                    <h5><p className= "sansserif"><b>Business License No: </b></p><input className="form-control" className="a" value = {this.state.licenseNo} onChange={this.licenseNoChange} type="text" placeholder="105015-K"  /></h5>
                                </div>
                                <div className="form-group">
                                    <h5><p className= "sansserif"><b>Email: </b></p><input className="form-control" value = {this.state.email} onChange={this.emailChange} type="text" placeholder="murni@gmail.com"  /></h5>
                                </div>
                                <div className="form-group">
                                    <h5><p className= "sansserif"><b>Password: </b></p><input className="form-control" value = {this.state.password} onChange={this.password} type="password" placeholder="********"/></h5>
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