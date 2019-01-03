import React from 'react';
import '../css/components/App.css';

import RepsList from './Repositories/RepsList';
import NewRepository from './Repositories/NewRepository';
import RepositoryEditor from "./Repositories/RepositoryEditor";

const App = () => {
    // toggleNewRepository = () => {
    //     this.setState({addRep: !this.state.addRep});
    //     if (!this.state.addRep) this.setState({allRepositories: this._tempBankList()});
    //     // if (!this.state.addRep) this.allRepositories = this.getAllRepository();
    // };
    //
    // newRepositoryShow = (showNewRep) => {
    //     if (showNewRep) {
    //         return (
    //             <div className="ui container">
    //                 <NewRep
    //                     showRepository={this.toggleNewRepository}
    //                     addRepository={this._addRepository}/>
    //             </div>
    //         );
    //     }
    //
    //     return <Button bsStyle="primary" onClick={this.toggleNewRepository}>Add repository</Button>;
    // };
    //
    // _addRepository = (rep) => {
    //     this.setState({allRepositories: [...this._tempBankList(), rep]});
    // };

    // getAllRepository = async () => {
    // return await unsplash.get('/', {
    //     params: {query: 'all'},
    // }).data.results;
    // };

    // deleteRepository = (repId) => () => {
    //     const filteredRepositories = this.state.allRepositories.filter(rep => rep.id !== repId);
    //     this.setState({allRepositories: filteredRepositories});
    // };

    return (
        <div className="App">
            <header className="App-header">Money Save</header>
            <div className="App-body">
                <RepositoryEditor />
                <NewRepository />
                <RepsList />
            </div>
        </div>
    );
};

export default App;
