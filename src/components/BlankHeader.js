import React from 'react';
import {Link} from 'react-router-dom';

const BlankHeader = () => (
    <header>
        <div  className="header">
            <Link to="/">
                <img className="header__logo" src="../../images/logoHeader.png"/>
            </Link>
        </div>
    </header>
);

export default BlankHeader;