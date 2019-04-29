import React, {Component} from 'react';
import '../../css/components/WalletCreator.css';
import {Button, ButtonGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

class WalletForm extends Component {

    renderInput = (formProps) => {
        const renderError = ({error, touched}) => {
            if (touched && error)
                return <div> {formProps.meta.error}</div>
        };

        const errorCheck = `field${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;

        return (
            <div className={errorCheck}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                {renderError(formProps.meta)}
            </div>
        );
    };

    onSubmit = formValues => this.props.onSubmit(formValues);

    render() {
        return (
            <div className="new-wallet">
                <form className="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="name" label="Name" component={this.renderInput}/>
                    <Field name="type" label="Type" component={this.renderInput}/>
                    <Field name="amount" label="Starting Amount" component={this.renderInput}/>

                    <ButtonGroup>
                        <Link to="/" className="btn btn-primary">Cancel</Link>
                        <Button bsStyle="primary" type="submit">Save</Button>
                    </ButtonGroup>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    // redux confronta il nome con la proprietà di errors e se trova corrispondenza lancia un errore
    if (!formValues.name) errors.name = 'You must enter a name';
    if (!formValues.type) errors.type = 'You must enter a type';
    return errors;
};

export default reduxForm({
    form: 'walletForm',
    validate,
})(WalletForm);