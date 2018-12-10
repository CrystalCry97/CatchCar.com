import React from 'react';
import {Link} from 'react-router-dom';

const FrontHeader = () => (
    <header>
        <div  className="header">
            <Link to="/">
                <img className="header__logo" src="images/logoHeader.png"/>
            </Link>
            <div className="header__nav">
                <button className="header__button">
                    <Link to="/company-login" className="link" >Company Login</Link>
                </button>
            </div>
        </div>
    </header>
);

export default FrontHeader;