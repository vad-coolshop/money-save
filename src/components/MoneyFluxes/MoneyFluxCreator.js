import React, {Component} from 'react';
import '../../css/components/MoneyFluxCreator.css';
import {Button, ButtonGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

import {createFlux, createWallet} from "../../actions";
import connect from "react-redux/es/connect/connect";

class MoneyFluxCreator extends Component {

    renderInput = formProps => {
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
            <div className="new-flux">
                <h3>Create a Wallet</h3>
                <form className="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="wallet" label="Wallet" component={this.renderInput}/>
                    <Field name="amount" label="Amount" component={this.renderInput}/>
                    <Field name="comment" label="Enter a comment" component={this.renderInput}/>

                    <ButtonGroup>
                        <Link to="/" className="btn btn-primary">Cancel</Link>
                        <Button bsStyle="primary" type="submit">Save</Button>
                    </ButtonGroup>
                </form>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {};
    // redux confronta il nome con la proprietà di errors e se trova corrispondenza lancia un errore
    if (!formValues.wallet) errors.name = 'You must enter a wallet';
    return errors;
};

export default reduxForm({
    form: 'MoneyFluxCreator',
    validate,
    createWallet
})(MoneyFluxCreator);