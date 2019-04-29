import React, {Component} from 'react';
import {Route, Router, Switch} from "react-router-dom";
import '../css/components/App.css';
import history from '../history';

import Header from './Header/Header'
import WalletList from './Wallets/WalletList';
import WalletEdit from './Wallets/WalletEdit';
import WalletCreator from './Wallets/WalletCreator';
import WalletDelete from './Wallets/WalletDelete';
import WalletShow from './Wallets/WalletShow';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header"></header>
                <div className="App-body">
                    <Router history={history}>
                        <div>
                            <Header/>
                            <Switch>
                                <Route path="/" exact component={WalletList}/>
                                <Route path="/wallets/new" exact component={WalletCreator}/>
                                <Route path="/wallets/edit/:id" exact component={WalletEdit}/>
                                <Route path="/wallets/delete/:id" exact component={WalletDelete}/>
                                <Route path="/wallets/:id" exact component={WalletShow}/>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
