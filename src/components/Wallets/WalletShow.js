import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import history from '../../history';
import {getWallet} from "../../actions";

class WalletShow extends Component {
    componentDidMount() {
        this.props.getWallet(this.props.match.params.id);
    }

    componentWillUnmount() {
    }

    render() {
        if(!this.props.wallet) {
            return <div>Loading...</div>
        }

        return <div>Spese</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {wallet: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {getWallet})(WalletShow);