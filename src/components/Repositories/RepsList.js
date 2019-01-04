import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Table} from "react-bootstrap";
import '../../css/components/RepsList.css';

import RepositoryEditor from './RepositoryEditor';
import ButtonGroup from "react-bootstrap/es/ButtonGroup";

class RepsList extends Component {

    _showModal = (item) => () => {

    };

    _addNewRepository = () => {
        this.props.newRep({});
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
                    <th>Actions <Button bsStyle="primary" onClick={this._addNewRepository}>Add +</Button></th>
                </tr>
                </thead>
                <tbody>
                {listItems}
                </tbody>
            </Table>
        );
    };

    renderedList = () => {
        return this.props.allRepositories.map(item => {
            if (!item.editing) {
                return (
                    <tr className="rep-element" key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>
                            <ButtonGroup>
                                <Button bsStyle="danger">-</Button>
                                <Button bsStyle="primary" onClick={this._showModal(item)}>Edit</Button>
                                <Button bsStyle="danger">+</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                );
            }

            return <RepositoryEditor rep={item}/>;
        });
    };

    render() {
        return <div className="rep-list">{this.renderedTable()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {allRepositories: state.allRepositories};
};

export default connect(mapStateToProps)(RepsList);