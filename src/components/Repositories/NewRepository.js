import React, {Component} from 'react';
import '../../css/components/NewRepository.css';
import {Button, Row} from "react-bootstrap";


class NewRepository extends Component {

    constructor(props) {
        super(props);

        this.state = {newRep: {name: 'undefined', startingValue: 0, type: 'undefined'}};
    }

    cancelNewRepository = () => {
        this.setState({newRep: {name: 'undefined', startingValue: 0, type: 'undefined'}});
        this.props.showRepository();
    };

    addNewRepository = (event) => {
        event.preventDefault();

        // this.props.addRepository({form: this.form});
        // this.props.showRepository();
    };

    onInputChange = event => {
        this.setState({})
    };

    render() {
        return (
            <div className="new-repository container-fluid">
                <form onSubmit={this.addNewRepository}>
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
                        <label htmlFor="type">Type</label>
                        <input id="type"
                               value={this.state.newRep.type}
                               type="text"
                               placeholder={this.state.newRep.type}/>
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