import React, {Component} from 'react';
import '../css/components/NewRepository.css';
import {Button, Col, Grid, Row} from "react-bootstrap";


class NewRepository extends Component {
    render() {
        return (
            <div className="new-repository">
                <form>
                    <Grid>
                        <Row>
                            <Col xs={4}>
                                <Row>
                                    <label htmlFor="name">Repository Name</label>
                                    <input id="name" type="text"/>
                                </Row>
                                <Row>
                                    <label htmlFor="startingValue">Starting Currency</label>
                                    <input id="startingValue" type="text"/>
                                </Row>
                                <Row>
                                    <label htmlFor="type">Type</label>
                                    <input id="type" type="text"/>
                                </Row>
                                <Row>
                                    <Button bsStyle="danger">Cancel</Button>
                                    <Button bsStyle="primary">Confirm</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </form>
            </div>
        );
    }
}

export default NewRepository;