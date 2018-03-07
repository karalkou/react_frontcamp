import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ArticlesSelect from './ArticlesSelect';

class BlogListFiltrationPanel extends Component {
    render() {
        return (
            <div style={{marginBottom: '15px'}}>
                <span>By author: </span>
                <ArticlesSelect />
            </div>
        );
    }
}

export default BlogListFiltrationPanel;
