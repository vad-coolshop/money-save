import React, {Component} from 'react';
import '../css/components/App.css';
import {Button} from 'react-bootstrap';

import NewRep from './NewRepository';
import unsplash from "../api/unsplash";

class App extends Component {

    _tempBankList = () => [
        {id: 0, name: 'banca', type: 'virtual', amount: 100},
        {id: 1, name: 'contante', type: 'cash', amount: 40},
        {id: 2, name: 'carta', type: 'virtual', amount: 30},
    ];

    constructor(props) {
        super(props);

        this.state = {addRep: false};
        this.allRepositories = [];

        // TODO change to rest
        this.allRepositories = this._tempBankList();
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
        return await unsplash.get('/', {
            params: {query: 'all'},
        }).data.results;
    };

    renderedList = (array) => {
        return array.map(item => {
            return (
                <tr className="rep-element">
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>
                        <div className="btn-group">
                            <Button bsStyle="danger">edit</Button>
                            <Button bsStyle="secondary">cancel</Button>
                        </div>
                    </td>
                </tr>
            );
        });
    };


    render() {
        const listItems = this.renderedList(this.allRepositories);

        return (
            <div className="App">
                <header className="App-header">Money Save</header>
                <div className="App-body">
                    {this.newRepositoryShow(this.state.addRep)}
                    <div className="rep-list">

                        <table>
                            <thead>
                            <tr>
                                <th>Rep Name</th>
                                <th>Rep type</th>
                                <th>Rep total</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {listItems}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
