import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <div className="notFoundPage">
            <h1>Oopss.. Something's gone wrong!</h1>
            <p>Sorry, we doesn't sure where u wanna go.</p>
            <p>If this is not something that suppose to be, call 911 !!!</p>
            <p>Nahh! I'm just kidding</p>
            <Link to="/" className="link">Go Home</Link>
        </div>
    </div>
);

export default NotFoundPage;