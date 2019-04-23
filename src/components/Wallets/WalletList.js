import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ButtonGroup, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../../css/components/WalletList.css';

import WalletEditor from './WalletEditor';
import {getWallets, deleteWallet} from "../../actions";

class WalletList extends Component {

    constructor(props) {
        super(props);

        this.state = {editing: false};
    }

    componentDidMount() {
        this.props.getWallets();
    }

    _toggleEdit = (itemId) => {
        this.props.wallets.map(item => {
            if (item.id === itemId) item.editing = !item.editing || false;
            return '';
        });
        this.setState({editing: true});
    };

    _saveChanges = () => {
    };

    _deleteWallet = (walletId) => {
        this.props.deleteWallet(walletId);
    };

    renderedTable() {
        const listItems = this.renderedList();

        return (
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
                <tfoot>
                    <tr><td colSpan="4">{this.renderCreate()}</td></tr>
                </tfoot>
            </Table>
        );
    };

    renderedList() {
        // console.log('wallet', this.props.wallets);
        return this.props.wallets.map(item => {
            if (!item.editing) {
                return (
                    <tr className="wallet-element" key={item.id}>
                        <td onClick={this._getWallet(item.id)}>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>
                            <ButtonGroup>
                                {this.renderAdmin(item)}
                            </ButtonGroup>
                        </td>
                    </tr>
                );
            }

            return <tr key={item.id}>
                <td colSpan={3}><WalletEditor item={item}/></td>
                <td>
                    <ButtonGroup>
                        <Button bsStyle="primary" onClick={() => this._toggleEdit(item.id)}>Cancel</Button>
                        <Button bsStyle="primary" onClick={this._saveChanges}>Save Changes</Button>
                    </ButtonGroup>
                </td>
            </tr>;
        });
    };

    renderAdmin(wallet) {
        if (wallet.createdBy === this.props.currentUserId) {
            return (
                <div>
                    <Link to={`/wallets/edit/${wallet.id}`} className="">
                        <div className="btn btn-danger"><i className="glyphicon glyphicon-pencil"></i></div>
                    </Link>
                    <Link to={`/wallets/delete/${wallet.id}`} className="">
                        <div className="btn btn-danger" onClick={() => this._deleteWallet(wallet.id)}> <i className="glyphicon glyphicon-trash"></i></div>
                    </Link>
                </div>
            );
        }
    };

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <Link to="/wallets/new" className="btn btn-primary">Add +</Link>
                </div>
            );
        }
    };

    render() {
        return <div className="wallet-list">{this.renderedTable()}</div>;
    }
}

const mapStateToProps = (state) => {
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