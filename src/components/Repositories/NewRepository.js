import React, {Component} from 'react';
import '../../css/components/NewRepository.css';
import {Button, ControlLabel, Form, FormControl, FormGroup, HelpBlock} from "react-bootstrap";
import {connect} from "react-redux";
import ButtonGroup from "react-bootstrap/es/ButtonGroup";


class NewRepository extends Component {

    constructor(props) {
        super(props);

        this.state = {newRep: {name: 'undefined', startingValue: 0, type: 'undefined'}, value: ''};
    }

    exitEditor = () => {
        this.setState({newRep: {name: 'undefined', startingValue: 0, type: 'undefined'}});
        this.props.newRep({});
    };

    addNewRepository = (event) => {
        event.preventDefault();

        // this.props.addRepository({form: this.form});
        // this.props.showRepository();
    };

    // todo not useful by now
    // getValidationState() {
    //     const length = this.state.value.length;
    //     if (length > 20) return 'success';
    //     else if (length > 10) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    // }

    // handleChange = event => {
    //     this.setState({value: event.target.value});
    // };


    render() {
        const FieldGroup = ({id, label, help, ...props}) => {
            return (
                <FormGroup controlId={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl {...props} />
                    {help && <HelpBlock>{help}</HelpBlock>}
                </FormGroup>
            );
        };

        const typeList = this.props.repositoryTypes.map(type => <option key={type.id} value={type.name}>{type.name}</option>);

        return (
            <div className="new-repository">
                <Form onSubmit={this.addNewRepository}>
                    <FieldGroup
                        id="formControlsName"
                        type="text"
                        label="Name"
                        placeholder={this.state.newRep.name}
                    />

                    <FieldGroup
                        id="formControlsPrice"
                        type="text"
                        label="Amount"
                        placeholder={this.state.newRep.startingValue}
                    />

                    <FormGroup controlId="formControlsType">
                        <ControlLabel>Type</ControlLabel>
                        <FormControl componentClass="select" placeholder="Type">
                            {typeList}
                        </FormControl>
                    </FormGroup>

                    <ButtonGroup>
                        <Button bsStyle="primary" onClick={this.exitEditor}>Cancel</Button>
                        <Button bsStyle="primary" type="submit">Generate</Button>
                    </ButtonGroup>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {repositoryTypes: state.repositoryTypes};
};

export default connect(mapStateToProps)(NewRepository);