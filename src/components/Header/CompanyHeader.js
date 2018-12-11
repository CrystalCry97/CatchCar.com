import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { startLogout } from '../../actions/auth';

const CompanyHeader = ({startLogout}) => (
    <header>
        <div  className="header">
            <NavLink to="/">
                <img className="header__logo" src="../../images/logoHeader.png"/>
            </NavLink>
            <div className="header__nav">
                <NavLink to="/company-login/dashboard/"  className="companyDashboard__tabBtn" activeClassName="is-active" exact={true}>
                    List of Cars
                </NavLink>
                <NavLink to="/company-login/dashboard/add-car" className="companyDashboard__tabBtn"  activeClassName="is-active">
                    Add New Car
                </NavLink>
                <NavLink to="/company-login/"  onClick={startLogout} className="companyDashboard__tabBtn">
                    Log Out  
                </NavLink>
            </div>
            
        </div>
    </header>
);

const mapDispatchToProps= (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(CompanyHeader);