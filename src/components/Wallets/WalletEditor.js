import React from 'react';
import {connect} from 'react-redux';
import {Form, FormControl, FormGroup} from "react-bootstrap";

class WalletEditor extends React.Component {
    render() {
        const FieldGroup = ({id, label, help, ...props}) => {
            return (
                <FormGroup controlId={id}>
                    {/*<ControlLabel>{label}</ControlLabel>*/}
                    <FormControl {...props} />
                    {/*{help && <HelpBlock>{help}</HelpBlock>}*/}
                </FormGroup>
            );
        };

        const typeList = this.props.walletTypes.map(type => <option key={type.id}
                                                                        value={type.name}>{type.name}</option>);
        return (
            <div className="editing-item">
                <Form inline onSubmit={this.createWallet}>
                    <FieldGroup
                        id="formControlsName"
                        type="text"
                        label="Name"
                        placeholder={this.props.item.name}
                    />

                    <FormGroup controlId="formControlsType">
                        {/*<ControlLabel>Type</ControlLabel>*/}
                        <FormControl componentClass="select" placeholder={this.props.item.type}>
                            {typeList}
                        </FormControl>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {walletTypes: state.walletTypes};
};

export default connect(mapStateToProps)(WalletEditor);