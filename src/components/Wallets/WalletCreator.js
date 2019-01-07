import React, {Component} from 'react';
import '../../css/components/WalletCreator.css';
import {Button, ControlLabel, Form, FormControl, FormGroup, HelpBlock} from "react-bootstrap";
import {connect} from "react-redux";
import ButtonGroup from "react-bootstrap/es/ButtonGroup";


class WalletCreator extends Component {

    constructor(props) {
        super(props);

        this.stateDefault = {newWallet: {name: null, startingValue: 0, type: null}, value: ''};
        this.state = this.stateDefault;
    }

    exitEditor = () => {
        this.setState({newWallet: this.stateDefault});
        this.props.newWallet({});
    };

    addNewWallet = (event) => {
        event.preventDefault();

        // this.props.addWallet({form: this.form});
        // this.props.showWallet();
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

        const typeList = this.props.walletTypes.map(type => <option key={type.id} value={type.name}>{type.name}</option>);

        return (
            <div className="new-wallet">
                <Form onSubmit={this.addNewWallet}>
                    <FieldGroup
                        id="formControlsName"
                        type="text"
                        label="Name"
                        placeholder={this.state.newWallet.name}
                    />

                    <FieldGroup
                        id="formControlsPrice"
                        type="text"
                        label="Amount"
                        placeholder={this.state.newWallet.startingValue}
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
    return {walletTypes: state.walletTypes};
};

export default connect(mapStateToProps)(WalletCreator);