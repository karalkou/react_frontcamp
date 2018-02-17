import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bemto from 'bemto-components';

const PageWrapperStyled = styled(bemto())`
box-sizing: border-box;
background-color: #fafafa;
`;

class PageWrapper extends Component {
    render() {
        return (
            <PageWrapperStyled>
                {this.props.children}
            </PageWrapperStyled>
        );
    }
}

PageWrapper.propTypes = {};
PageWrapper.defaultProps = {};

export default PageWrapper;
