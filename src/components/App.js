import React, {Component} from 'react';
import '../css/components/App.css';
import {Col, Grid} from "react-bootstrap";
import {BrowserRouter, Route} from "react-router-dom";

import WalletList from './Wallets/WalletList';
import NewWallet from './Wallets/WalletCreator';
import SideBar from './SideBar/SideBar';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {newWallet: false};
    }

    toggleNewWallet = () => {
        this.setState({newWallet: !this.state.newWallet});
    };

    render() {

        const Wallet = () => {
            if (this.state.newWallet) {
                return <NewWallet newWallet={this.toggleNewWallet}/>
            }
            return <WalletList newWallet={this.toggleNewWallet}/>
        };

        const Expenses = () => {
            return <div>Spese</div>
        };

        return (
            <div className="App">
                <header className="App-header">Money Save</header>
                <div className="App-body">
                    <BrowserRouter>
                        <Grid>
                            <Col xs={3}>
                                <SideBar/>
                            </Col>
                            <Col xs={9}>
                                <Route path="/" exact component={Wallet}/>
                                <Route path="/expenses" exact component={Expenses}/>
                            </Col>
                        </Grid>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;
