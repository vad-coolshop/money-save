import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteRepository} from '../../actions';

import {Button} from "react-bootstrap";

class RepsList extends Component {

    renderedTable = () => {
        const listItems = this.renderedList();

        return (
            <table>
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
            </table>
        );
    };

    renderedList = () => {
        return this.props.allRepositories.map(item => {
            return (
                <tr className="rep-element" key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>
                        <div className="btn-group">
                            <Button bsStyle="primary">Edit</Button>
                            <Button bsStyle="primary">-</Button>
                            <Button bsStyle="danger">+</Button>
                        </div>
                    </td>
                </tr>
            );
        });
    };

    render() {
        return <div className="rep-list">{this.renderedTable()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {allRepositories: state.allRepositories};
};

export default connect(mapStateToProps, {deleteRepository})(RepsList);