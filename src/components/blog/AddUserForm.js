import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bemto from 'bemto-components';

class AddUserForm extends Component {
    state = {
        title: '',
        body: ''
    };

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    };

    handleSubmit = ev => {
        ev.preventDefault();
        // const { articleId, addComment } = this.props;
        // addComment(this.state, articleId);

        this.setState({
            title: '',
            body: '',
        })
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <input value={this.state.title} onChange={this.handleChange('title')}/>
                </div>
                <div>
                    <textarea value={this.state.body} onChange={this.handleChange('body')}/>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        );
    }
}

AddUserForm.propTypes = {};
AddUserForm.defaultProps = {};

export default AddUserForm;

/* styles */
var AddUserFormStyled = styled(bemto({}))``;

