import React from 'react';
import Modal from '../Modal'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import history from '../../history';

import {getWallet, deleteWallet} from "../../actions";

class WalletDelete extends React.Component {
    componentDidMount() {
        this.props.getWallet(this.props.match.params.id);
    }

    renderActions = () => {
        const {id} = this.props.match.params;

        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteWallet(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    };

    renderContent() {
        if (!this.props.wallet) {
            return 'Sure?'
        }

        return `Sure? ${this.props.wallet.name}`;
    }

    render() {
        return (
            <Modal
                title="Delete Wallet"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {wallet: state.wallets[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {getWallet, deleteWallet})(WalletDelete);