import React from 'react';
import {connect} from 'react-redux';

import {Button} from "react-bootstrap";


const RepositoryEditor = (props) => {
    return (
        <div>
            editor
            <Button bsStyle="danger" onClick={() => this.props.deleteRepository(this.props.itemId)}>Cancel</Button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {deletingRepository: state.deletingRepository};
};

export default connect(mapStateToProps, {})(RepositoryEditor);