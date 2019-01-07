import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class SideBar extends Component {

    render() {
        return (
            <div>
                <div>SideBar</div>
                    <ul>
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link to="/expenses">Expenses</Link></li>
                    </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(SideBar);