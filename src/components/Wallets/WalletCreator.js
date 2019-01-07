import React, {Component} from 'react';
import '../../css/components/WalletCreator.css';
import {Button} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/es/ButtonGroup";
import {Field, reduxForm} from "redux-form";


class WalletCreator extends Component {

    exitEditor = () => {
        this.props.newWallet({});
    };

    // todo not useful by now
    // getValidationState() {
    //     const length = this.state.value.length;
    //     if (length > 20) return 'success';
    //     else if (length > 10) return 'warning';
    //     else if (length > 0) return 'error';
    //     return null;
    // }

    renderInput = (formProps) => {
        console.log(formProps);
        // {...formProps.input} adds all standard input to <input />

        const renderError = ({error, touched}) => {
            if (touched && error)
                return <div> {formProps.meta.error}</div>
        };

        const errorCheck = `field${formProps.meta.error&& formProps.meta.touched ? 'error' : ''}`;

        return (
            <div className={errorCheck}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                {renderError(formProps.meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {};


    render() {
        console.log(this.props);
        // const FieldGroup = ({id, label, help, ...props}) => {
        //     return (
        //         <FormGroup controlId={id}>
        //             <ControlLabel>{label}</ControlLabel>
        //             <FormControl {...props} />
        //             {help && <HelpBlock>{help}</HelpBlock>}
        //         </FormGroup>
        //     );
        // };

        // const typeList = this.props.walletTypes.map(type => <option key={type.id}
        //                                                             value={type.name}>{type.name}</option>);

        return (
            <div className="new-wallet">
                <form className="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>

                    <Field name="name" label="Name" component={this.renderInput}/>
                    <Field name="type" label="Type" component={this.renderInput}/>
                    <Field name="amount" label="Starting Amount" component={this.renderInput}/>

                    <ButtonGroup>
                        <Button bsStyle="primary" onClick={this.exitEditor}>Cancel</Button>
                        <Button bsStyle="primary" type="submit">Generate</Button>
                    </ButtonGroup>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
        const errors = {};
        if (!formValues.name) errors.name = 'You must enter a name'; // redux confronta il nome con la proprietà di errors e se trova corrispondenza lancia un errore
        if (!formValues.type) errors.type = 'You must enter a type';
        return errors;
    }
;

export default reduxForm({
    form: 'walletCreatorForm',
    validate, // equivalent to validate: validate
})(WalletCreator)