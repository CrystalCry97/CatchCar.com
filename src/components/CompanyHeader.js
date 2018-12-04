import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const CompanyHeader = () => (
    <header>
        <div  className="header">
            <Link to="/">
                <img className="header__logo" src="../../images/logoHeader.png"/>
            </Link>
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
        </div>
    </header>
);

export default CompanyHeader;