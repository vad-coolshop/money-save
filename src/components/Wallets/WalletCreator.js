import React, {Component} from 'react';
import '../../css/components/WalletCreator.css';
import {connect} from "react-redux";
import WalletForm from "./WalletForm"

import {createWallet} from "../../actions";

class WalletCreator extends Component {

    onSubmit = (formValues) => {
        this.props.createWallet(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create a Wallet</h3>
                <WalletForm
                    onSubmit={this.onSubmit}
                ></WalletForm>
            </div>
        )
    }
}

export default connect(null, {createWallet})(WalletCreator);