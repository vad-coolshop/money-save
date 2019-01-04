import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Table} from "react-bootstrap";
import '../../css/components/RepsList.css';
import {getAllRepositories, getRepository} from "../../actions";

import RepositoryEditor from './RepositoryEditor';
import ButtonGroup from "react-bootstrap/es/ButtonGroup";

class RepsList extends Component {

    constructor(props) {
        super(props);

        this.state = {editing: false};

        this.showingRepositories = this.props.repositories || [];
    }

    _toggleEdit = (itemId) => () => {
        this.showingRepositories.map(item => {
            if (item.id === itemId) item.editing = !item.editing || false;
            return '';
        });
        this.setState({editing: true});
    };

    _saveChanges = () => {
    };

    _deleteRepository = () => {
    };

    _getRepository = (targetId) => {
    };

    _addNewRepository = () => {
        this.props.newRep({});
    };

    // componentDidMount() {
    //     this.props.repositories();
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
        return this.showingRepositories.map(item => {
            if (!item.editing) {
                return (
                    <tr className="rep-element" key={item.id}>
                        <td onClick={this._getRepository(item.id)}>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>
                            <ButtonGroup>
                                <Button bsStyle="danger">-</Button>
                                <Button bsStyle="primary" onClick={this._toggleEdit(item.id)}>Edit</Button>
                                <Button bsStyle="danger">+</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                );
            }

            return <tr key={item.id}>
                <td colSpan={3}><RepositoryEditor item={item}/></td>
                <td>
                    <ButtonGroup>
                        <Button bsStyle="primary" onClick={this._toggleEdit(item.id)}>Cancel</Button>
                        <Button bsStyle="primary" onClick={this._saveChanges}>Save Changes</Button>
                        <Button bsStyle="primary" onClick={this._deleteRepository}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>;
        });
    };

    render() {
        return <div className="rep-list">{this.renderedTable()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {repositories: state.repositories};
};

export default connect(mapStateToProps)(RepsList);
// export default connect(mapStateToProps, {getAllRepositories, getRepository})(RepsList);