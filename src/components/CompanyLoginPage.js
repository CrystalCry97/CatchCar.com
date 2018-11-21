import React from 'react';
import {Link} from 'react-router-dom';
import BlankHeader from './BlankHeader';

const CompanyLoginPage = () => (
    <div >
        <BlankHeader/>
        <p>CompanyLoginPage</p>
        <form >
            <input
                type="text"
                placeholder="Email"
            />
            <input
                type="password"
                placeholder="Password"
            />
            <button>
                <Link to="/company-login/dashboard/" className="link" >Login</Link>
            </button>
        </form>
        
        
    </div>
);

export default CompanyLoginPage;