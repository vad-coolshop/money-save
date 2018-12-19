import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPosts } from "../actions";

class PostsNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const invalid = (error && touched) ? 'has-danger' : '' ;
        const className = 'form-group ' + invalid;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPosts(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors  = {};

    if(!values.title || values.title.length < 3) {
        errors.title = "Enter a title of at least 3 characters!";
    }
    if(!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if(!values.contents) {
        errors.contents = "Enter some contents!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null,{ createPosts })(PostsNew)
);