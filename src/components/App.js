import React, {Component} from 'react';
import '../css/components/App.css';
import {Button} from 'react-bootstrap';
import { addRepository} from '../actions';

import NewRep from './NewRepository';

class App extends Component {

    _tempBankList = () => [
        {id: 0, name: 'banca', type: 'virtual', amount: 100},
        {id: 1, name: 'contante', type: 'cash', amount: 40},
        {id: 2, name: 'carta', type: 'virtual', amount: 30},
        {id: 3, name: 'satispay', type: 'virtual', amount: 150},
    ];

    constructor(props) {
        super(props);

        this.state = {addRep: false, allRepositories: this._tempBankList() || []};
        // TODO change to rest
    }

    toggleNewRepository = () => {
        this.setState({addRep: !this.state.addRep});
        if (!this.state.addRep) this.setState({allRepositories: this._tempBankList()});
        // if (!this.state.addRep) this.allRepositories = this.getAllRepository();
    };

    newRepositoryShow = (showNewRep) => {
        if (showNewRep) {
            return (
                <div className="ui container">
                    <NewRep
                        showRepository={this.toggleNewRepository}
                        addRepository={this._addRepository}/>
                </div>
            );
        }

        return <Button bsStyle="primary" onClick={this.toggleNewRepository}>Add repository</Button>;
    };

    _addRepository = (rep) => {
        this.setState({allRepositories: [...this._tempBankList(), rep]});
    };

    // getAllRepository = async () => {
    // return await unsplash.get('/', {
    //     params: {query: 'all'},
    // }).data.results;
    // };

    deleteRepository = (repId) => () => {
        const filteredRepositories = this.state.allRepositories.filter(rep => rep.id !== repId);
        this.setState({allRepositories: filteredRepositories});
    };

    renderedTable = () => {
        const listItems = this.renderedList();

        return (
            <div className="rep-list">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listItems}
                    </tbody>
                </table>
            </div>
        );
    };

    renderedList = () => {
        const array = this.state.allRepositories || [];

        return array.map(item => {
            return (
                <tr className="rep-element" key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>
                        <div className="btn-group">
                            <Button bsStyle="primary">Edit</Button>
                            <Button bsStyle="danger" onClick={this.deleteRepository(item.id)}>Cancel</Button>
                        </div>
                    </td>
                </tr>
            );
        });
    };


    render() {
        return (
            <div className="App">
                <header className="App-header">Money Save</header>
                <div className="App-body">
                    {this.newRepositoryShow(this.state.addRep)}
                    {this.renderedTable()}
                </div>
            </div>
        );
    }
}

export default App;
