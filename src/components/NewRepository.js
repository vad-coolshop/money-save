import React, {Component} from 'react';
import '../css/components/NewRepository.css';
import {Button, Row} from "react-bootstrap";


class NewRepository extends Component {

    constructor(props) {
        super(props);

        this.newRep = {name: 'undefined', startingValue: 0, type: 'undefined'};
    }

    cancelNewRepository = () => {
        this.newRep = {name: 'undefined', startingValue: 0, type: 'undefined'};
        this.props.addRepository();
    };

    addNewRepository = () => {
        this.props.addRepository();
    };

    render() {
        return (
            <div className="new-repository container-fluid">
                <form onSubmit={this.addNewRepository}>
                    <Row>
                        <label htmlFor="name">Repository Name</label>
                        <input id="name" type="text" placeholder={this.newRep.name}/>
                    </Row>
                    <Row>
                        <label htmlFor="startingValue">Starting Currency</label>
                        <input id="startingValue" type="text" placeholder={this.newRep.startingValue}/>
                    </Row>
                    <Row>
                        <label htmlFor="type">Type</label>
                        <input id="type" type="text" placeholder={this.newRep.type}/>
                    </Row>
                    <Row>
                        <div className="btn-group">
                            <Button bsStyle="danger" onClick={this.cancelNewRepository}>Cancel</Button>
                            <Button bsStyle="primary" onClick={this.addNewRepository}>Confirm</Button>
                        </div>
                    </Row>
                </form>
            </div>
        );
    }
}

export default NewRepository;