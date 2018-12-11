import React from 'react';
import {Link} from 'react-router-dom';

const FrontHeader = () => (
    <header>
        <div  className="header">
            <Link to="/">
                <img className="header__logo" src="images/logoHeader.png"/>
            </Link>
            <div className="header__nav">
                <Link to="/company-login" className="companyDashboard__tabBtn"  >Company Login</Link>
            </div>
        </div>
    </header>
);

export default FrontHeader;