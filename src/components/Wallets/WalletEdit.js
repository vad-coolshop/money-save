import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editWallet, getWallet} from "../../actions";
import WalletForm from "./WalletForm"

class WalletEdit extends Component {
    componentDidMount() {
        getWallet(this.props.match.params.walletId);
    }

    onSubmit = formValues => {
        this.props.editWallet(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.wallet) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3> Edit the Wallet</h3>
                <WalletForm
                    initialValues={_.pick(this.props.wallet, 'name', 'type')}
                    onSubmit={this.onSubmit}
                ></WalletForm>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {wallet: state.wallets[ownProps.match.params.walletId]}
};

export default connect(mapStateToProps, {getWallet, editWallet})(WalletEdit);