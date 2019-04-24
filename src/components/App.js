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
        const wallets = () => <WalletList/>;
        const walletCreator = () => <WalletCreator/>;
        const walletEdit = () => <WalletEdit/>;
        const walletDelete = () => <WalletDelete/>;
        const walletShow = () => <WalletShow/>;

        return (
            <div className="App">
                <header className="App-header">Money Save</header>
                <div className="App-body">
                    <Router history={history}>
                        <div>
                            <Header/>
                            <Switch>
                                <Route path="/" exact component={wallets}/>
                                <Route path="/wallets/new" exact component={walletCreator}/>
                                <Route path="/wallets/edit/:id" exact component={walletEdit}/>
                                <Route path="/wallets/edit/:id" exact component={walletEdit}/>
                                <Route path="/wallets/delete/:id" exact component={walletDelete}/>
                                <Route path="/wallets/:id" exact component={walletShow}/>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
