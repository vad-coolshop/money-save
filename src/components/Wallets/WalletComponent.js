import React, {Component} from 'react';
import {Link} from "react-router-dom";

import '../../css/components/WalletComponent.css';

class WalletComponent extends Component {
    goToWallet = walletId => {};
    
    addFluxToWallet = isAdd => {};
    
    render() {
        const wallet = this.props.wallet;
        
        if (!this.props.wallet) {
            return <div>Loading...</div>
        }
        
        return (
            <div className="wallet-recap">
                <div className="wallet-header text-right">
                    <Link to={`/wallets/edit/${wallet.id}`} className="">
                        <div className="btn btn-danger"><i className="glyphicon glyphicon-pencil"></i></div>
                    </Link>
                    <Link to={`/wallets/delete/${wallet.id}`} className="">
                        <div className="btn btn-danger"><i className="glyphicon glyphicon-trash"></i></div>
                    </Link>
                </div>
                <div className="row wallet-main">
                    <div className="col-xs-12" onClick={this.goToWallet(wallet.id)}>
                        <div className="wallet-name">{wallet.name}</div>
                        <div className="col-xs-6 wallet-type">{wallet.type}</div>
                    </div>
                </div>
                <div className="row wallet-footer">
                    <div className="col-xs-4">
                        <Link to={`/wallets/edit/${wallet.id}/addFlux?op=remove`} className="">
                            <div className="btn btn-danger"><i className="glyphicon glyphicon-minus-sign"></i></div>
                        </Link>
                    </div>
                    <div className="col-xs-4">
                        <div className="wallet-total">{wallet.total}</div>
                    </div>
                    <div className="col-xs-4">
                        <Link to={`/wallets/edit/${wallet.id}/addFlux?op=add`} className="">
                            <div className="btn btn-danger"><i className="glyphicon glyphicon-plus-sign"></i></div>
                        </Link>
                    </div>
                    {/*<div className="col-xs-6 wallet-action pull-left" onClick={this.addFluxToWallet(false)}>-</div>*/}
                    {/*<div className="col-xs-6 wallet-action pull-right" onClick={this.addFluxToWallet(true)}>+</div>*/}
                </div>
            </div>
        )
    }
}

export default WalletComponent;