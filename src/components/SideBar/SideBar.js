import React, {Component} from 'react';
import {connect} from 'react-redux';


class SideBar extends Component {

    render() {
        return <div>SideBar</div>
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(SideBar);