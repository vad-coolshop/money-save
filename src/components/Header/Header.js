import React from 'react';
import {Link} from "react-router-dom";

import GoogleAuth from '../GoogleAuth';

const Header = () => {
    return (
        <div className='nav menu'>
            <Link to="/" className="item"> Money Manager</Link>
            <div className="right menu">
                <Link to="/" className="item"> All Wallets</Link>
                <GoogleAuth/>
            </div>
        </div>
    );
};

export default Header;