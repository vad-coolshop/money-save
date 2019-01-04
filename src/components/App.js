import React, {Component} from 'react';
import '../css/components/App.css';
import {Col, Grid} from "react-bootstrap";

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

        const bodyContainer = () => {
            if (this.state.newRep) {
                return <NewRepository newRep={this.toggleNewRepository}/>
            }
            /*<RepositoryEditor/>*/
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
                            {bodyContainer()}
                        </Col>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
