import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";

import {signIn, signOut} from "../actions";

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', async () => {
            await window.gapi.client.init({
                clientId: '707337397709-ju98dtmqiqri683lkbk4vf2gdb2gktjv.apps.googleusercontent.com',
                scope: 'email'
            });

            this.auth = window.gapi.auth2.getAuthInstance();
            this._onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this._onAuthChange);
        });
    }

    _onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    _onSignInClick = () => {
        this.auth.signIn();
    };

    _onSignOutClick = () => {
        this.auth.signOut();
    };

    _renderAuthButton = () => {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <Button bsStyle="danger" onClick={this._onSignOutClick}>
                    Sign Out
                </Button>
            );
        } else {
            return (
                <Button bsStyle="danger" onClick={this._onSignInClick}>
                    Sign In with Google
                </Button>
            );
        }
    };

    render() {
        return <div>{this._renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);