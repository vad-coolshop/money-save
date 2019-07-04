import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../css/components/WalletList.css';
import {deleteWallet, getWallets} from "../../actions";
import isEmpty from 'ramda';

import WalletComponent from './WalletComponent'

class WalletList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {editing: false};
    }
    
    componentDidMount() {
        this.props.getWallets();
    }
    
    renderRows() {
        return this.props.wallets.map(wallet => {
            return (
                <div className="col-xs-12 col-sm-6 col-lg-3">
                    <WalletComponent wallet={wallet}></WalletComponent>
                </div>
            )
        })
    };
    
    renderedList() {
        if (isEmpty(this.props.wallets)) {
            return "Loading...";
        }
        
        return (
            <div className="wallet-list">
                {this.renderRows()}
            </div>
        )
    }
    
    render() {
        return <div className="wallet-list">{this.renderedList()}</div>;
    }
}

const mapStateToProps = state => {
    return {
        wallets: Object.values(state.wallets),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, {
    getWallets,
    deleteWallet
})(WalletList);