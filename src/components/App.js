import React, {Component} from 'react';
import '../css/components/App.css';
import {Col, Grid} from "react-bootstrap";
import {BrowserRouter, Route} from "react-router-dom";

import RepsList from './Repositories/RepsList';
import NewRepository from './Repositories/NewRepository';
import SideBar from './SideBar/SideBar';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {newRep: false};
    }

    toggleNewRepository = () => {
        this.setState({newRep: !this.state.newRep});
    };

    render() {

        const Repository = () => {
            if (this.state.newRep) {
                return <NewRepository newRep={this.toggleNewRepository}/>
            }
            return <RepsList newRep={this.toggleNewRepository}/>
        };

        const Expenses = () => {
            if (this.state.newRep) {
                return <NewRepository newRep={this.toggleNewRepository}/>
            }
            return <RepsList newRep={this.toggleNewRepository}/>
        };

        return (
            <div className="App">
                <header className="App-header">Money Save</header>
                <div className="App-body">
                    <Grid>
                        <Col xs={3}>
                            <SideBar/>
                        </Col>
                        <Col xs={9}>
                            <BrowserRouter>
                                <div>
                                    <Route path="/" exact component={Repository}/>
                                    <Route path="/expenses" exact component={Expenses}/>
                                </div>
                            </BrowserRouter>
                            {bodyContainer()}
                        </Col>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
