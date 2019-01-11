import React, {Component} from 'react';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '707337397709-ju98dtmqiqri683lkbk4vf2gdb2gktjv.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return <div>Google</div>
    }
}

export default GoogleAuth;