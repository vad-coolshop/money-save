import React, {Component} from 'react';
import '../css/components/App.css';
import {Button} from 'react-bootstrap';

import NewRep from './NewRepository';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">Money Save</header>
                <div className="App-body">
                    <Button bsStyle="primary">Add repository</Button>
                    <NewRep/>
                    <table className="rep-list">
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
                                <Button bsStyle="danger">edit</Button>
                                <Button bsStyle="secondary">cancel</Button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
