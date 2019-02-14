import React, {Component} from 'react';
import {Col, Grid} from "react-bootstrap";
import {Router, Route} from "react-router-dom";
import '../css/components/App.css';
import history from '../history';

import Header from './Header/Header'
import WalletList from './Wallets/WalletList';
import WalletEdit from './Wallets/WalletEdit';
import NewWallet from './Wallets/WalletCreator';
import SideBar from './SideBar/SideBar';

class App extends Component {

    render() {
        const wallets = () => <WalletList />;
        const newWallet = () => <NewWallet />;
        const walletEdit = () => <WalletEdit />;
        const walletDelete = () => <NewWallet />;
        const expenses = () => <div>Spese</div>;

        return (
            <div className="App">
                <header className="App-header">Money Save</header>
                <div className="App-body">
                    <Router history={history}>
                        <div>
                            <Header/>
                            <Grid>
                                <Col xs={3}>
                                    <SideBar/>
                                </Col>
                                <Col xs={9}>
                                    <Route path="/" exact component={wallets}/>
                                    <Route path="/wallets/new" exact component={newWallet}/>
                                    <Route path="/wallets/edit/:id" exact component={walletEdit}/>
                                    <Route path="/wallets/delete/:id" exact component={walletDelete}/>
                                    <Route path="/expenses" exact component={expenses}/>
                                </Col>
                            </Grid>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
