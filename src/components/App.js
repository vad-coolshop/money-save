import React, {Component} from 'react';
import '../css/components/App.css';
import {Button} from 'react-bootstrap';

import NewRep from './NewRepository';
import axios from "axios";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {addRep: false};
        this.allRepositories = [];
    }

    toggleNewRepository = () => {
        this.setState({addRep: !this.state.addRep});
        if (!this.state.addRep) this.allRepositories = this.getAllRepository();
    };

    newRepositoryShow = (showNewRep) => {
        if (showNewRep) {
            return <div className="ui container"><NewRep addRepository={this.toggleNewRepository}/></div>;
        }

        return <Button bsStyle="primary" onClick={this.toggleNewRepository}>Add repository</Button>;
    };

    getAllRepository = async () => {
        return await axios.get('/', {
            params: {query: 'all'},
        }).data.results;
    };


    render() {
        return (
            <div className="App">
                <header className="App-header">Money Save</header>
                <div className="App-body">
                    {this.newRepositoryShow(this.state.addRep)}
                    {/*<div className="rep-list">
                        <table>
                            <thead>
                            <tr>
                                <th>Rep Name</th>
                                <th>Rep total</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="rep-element">
                                <td>name</td>
                                <td>total</td>
                                <td>
                                    <div className="btn-group">
                                        <Button bsStyle="danger">edit</Button>
                                        <Button bsStyle="secondary">cancel</Button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>*/}
                </div>
            </div>
        );
    }
}

export default App;
