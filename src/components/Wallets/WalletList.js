import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ButtonGroup, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../../css/components/WalletList.css';

import WalletEditor from './WalletEditor';
import {getWallets} from "../../actions";

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

    _deleteWallet = () => {
    };

    _getWallet = (targetId) => {
    };

    renderedTable = () => {
        const listItems = this.renderedList();

        return (
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Total</th>
                    <th>Actions {this.renderCreate()}</th>
                </tr>
                </thead>
                <tbody>
                {listItems}
                </tbody>
            </Table>
        );
    };

    renderedList = () => {
        // console.log(this.props.wallets);
        return this.props.wallets.map(item => {
            if (!item.editing) {
                return (
                    <tr className="wallet-element" key={item.id}>
                        <td onClick={this._getWallet(item.id)}>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>
                            <ButtonGroup>
                                <Button bsStyle="danger">-</Button>
                                {this.renderAdmin(item)}
                                <Button bsStyle="danger">+</Button>
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

    renderAdmin = (wallet) => {
        if (wallet.createdBy === this.props.currentUserId) {
            return (
                <div>
                    <Link to={`/wallets/edit/${wallet.id}`} className="">Edit</Link>
                    <Link to={`/wallets/delete/${wallet.id}`} className="">Delete</Link>
                </div>
            );
        }
    };

    renderCreate = () => {
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
        isSignedIn: state.isSignedIn
    };
};

export default connect(mapStateToProps, {
    getWallets
})(WalletList);