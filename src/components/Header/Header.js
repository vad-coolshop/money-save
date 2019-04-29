import React from 'react';
import {Link} from "react-router-dom";

import GoogleAuth from '../GoogleAuth';
import connect from "react-redux/es/connect/connect";

const Header = props => {

    const renderCreate = () => {
        if (props.isSignedIn) {
            return (
                <Link to="/wallets/new" className="btn btn-primary">Add +</Link>
            );
        }

        return <div></div>
    };

    return (
        <div className='nav menu'>
            <Link to="/" className="item pull-left">Money Manager</Link>
            <div className="pull-right"><GoogleAuth/></div>
            <div className="pull-right">{renderCreate()}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps)(Header);