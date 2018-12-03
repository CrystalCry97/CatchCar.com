import React from 'react';
import {Link} from 'react-router-dom';
import BlankHeader from './BlankHeader';

const CompanyLoginPage = () => (
    <div >
        <BlankHeader/>
        <div className="companyloginpage__column">
            <form id="loginform" noValidate="validate">
                <div className="companyloginpage__container">
                    <div>
                    
                        <div className="companyloginpage__form-group">
                            <h2>Rental Company</h2>
                            <h3><b>Username: </b><input className="form-control" id="username" type="text" placeholder="eg: CompanyA" required="required" data-validation-required-message="Please enter your username."/></h3>	    
                        </div>
                        
                        <div className="companyloginpage__form-group">
                            {/*PASSWORD*/}
                            <h3><b>Password: </b><input className="form-control" id="password" type="password" maxLength="8" data-validation-required-message="Please enter your password correctly."/></h3>	
                        </div>
                        
                        {/*LOG IN BUTTON*/}
                        <div className="companyloginpage__form-group ">
                            <div id="success"></div>
                            <Link to="/company-login/dashboard/" className="companyloginpage__btn" >Login</Link>
                        </div>

                        {/*SIGN UP LINK*/}
                        <h5><a  href="rentalcompsignup.html">Didn't have account? Sign up now</a></h5>
                            
                    </div>		
                </div>
            </form>				
        </div>	
        
    </div>
);

export default CompanyLoginPage;

/********************************************************************************************** */
/********************************************************************************************** */

// import React from 'react';
// import {Link} from 'react-router-dom';
// import BlankHeader from './BlankHeader';

// const CompanyLoginPage = () => (
//     <div >
//         <BlankHeader/>
//         <h2>Company Login</h2>
//         <form >
//             <input
//                 type="text"
//                 placeholder="Email"
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//             />
//             <button>
//                 <Link to="/company-login/dashboard/" className="link" >Login</Link>
//             </button>
//         </form>
        
        
//     </div>
// );

// export default CompanyLoginPage;

/********************************************************************************************** */
/********************************************************************************************** */

// import React from 'react';
// import { connect } from 'react-redux';
// import BlankHeader from './BlankHeader';
// import { startLogin } from '../actions/auth';

// const CompanyLoginPage = ({startLogin}) => (
//     <div >
//         <BlankHeader/>
//         <h2>Company Login</h2>
//         <form >
//             <button onClick={startLogin}>Login</button>
//         </form>     
//     </div>
// );

// const mapDispatchToProps =(dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// });

// export default connect(undefined,mapDispatchToProps)(CompanyLoginPage);