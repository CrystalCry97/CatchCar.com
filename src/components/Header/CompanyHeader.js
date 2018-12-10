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
            <button>
                <NavLink to="/company-login/dashboard/" activeClassName="is-active" exact={true}>
                    List of Cars
                </NavLink>
            </button>
            <button>
                <NavLink to="/company-login/dashboard/add-car" activeClassName="is-active">
                    Add New Car
                </NavLink>
            </button>
            <button>
                <NavLink to="/company-login/" onClick={startLogout} >
                    Log Out
                </NavLink>
            </button>
        </div>
    </header>
);

const mapDispatchToProps= (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(CompanyHeader);