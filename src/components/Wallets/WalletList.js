import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ButtonGroup, Table} from "react-bootstrap";
import '../../css/components/WalletList.css';

import WalletEditor from './WalletEditor';
import {getWallets} from "../../actions";

class WalletList extends Component {

    constructor(props) {
        super(props);

        this.state = {editing: false};

        this.showingWallets = this.props.wallets || [];
    }

    componentDidMount() {
        this.props.getWallets();
    }

    _toggleEdit = (itemId) => {
        this.showingWallets.map(item => {
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

    _createWallet = () => {
        this.props.newWallet({});
    };

    // componentDidMount() {
    //     this.props.wallets();
    // }

    renderedTable = () => {
        const listItems = this.renderedList();

        return (
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Total</th>
                    <th>Actions <Button bsStyle="primary" onClick={this._createWallet}>Add +</Button></th>
                </tr>
                </thead>
                <tbody>
                {listItems}
                </tbody>
            </Table>
        );
    };

    renderedList = () => {
        return this.showingWallets.map(item => {
            if (!item.editing) {
                return (
                    <tr className="wallet-element" key={item.id}>
                        <td onClick={this._getWallet(item.id)}>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>
                            <ButtonGroup>
                                <Button bsStyle="danger">-</Button>
                                {/*<Button bsStyle="primary" onClick={this._toggleEdit.bind(this)}>Edit</Button>*/}
                                <Button bsStyle="primary" onClick={() => this._toggleEdit(item.id)}>Edit</Button>
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
                        <Button bsStyle="primary" onClick={this._deleteWallet}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>;
        });
    };

    render() {
        return <div className="wallet-list">{this.renderedTable()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {wallets: state.wallets};
};

export default connect(mapStateToProps, {
    getWallets
})(WalletList);