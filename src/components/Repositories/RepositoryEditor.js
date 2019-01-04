import React from 'react';
import {connect} from 'react-redux';

import {Button, Row} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/es/ButtonGroup";


class RepositoryEditor extends React.Component {

    exitEditor = () => {};

    saveChanges = () => {};

    render() {
        return (
            <div className="editing-item">
                <Row>
                    <label htmlFor="name">Repository Name</label>
                    <input id="name"
                           value={this.state.newRep.name}
                           type="text"
                           placeholder={this.state.newRep.name}/>
                </Row>
                <Row>
                    <label htmlFor="startingValue">Starting Currency</label>
                    <input id="startingValue"
                           value={this.state.newRep.startingValue}
                           type="text"
                           placeholder={this.state.newRep.startingValue}/>
                </Row>
                <Row>
                    <ButtonGroup>
                        <Button bsStyle="primary" onClick={this.exitEditor}>Cancel</Button>
                        <Button bsStyle="primary" onClick={this.saveChanges}>Save Changes</Button>
                    </ButtonGroup>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {deletingRepository: state.deletingRepository};
};

export default connect(mapStateToProps, {})(RepositoryEditor);