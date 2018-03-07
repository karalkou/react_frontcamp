import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import bemto from 'bemto-components';
import { connect } from 'react-redux';
import { loadAllArticles, removeArticle } from '../../ducks/articles';
import { filteredArticlesSelector } from '../../ducks/filters';
import BlogListItem from './BlogListItem';
import { mapToArr } from "../../utils";

class BlogList extends Component {

    componentDidMount(){
        const { list, loadAllArticles } = this.props;
        if ( !list.length ) {
            loadAllArticles();
        }
    }

    onClick = (id) => (ev) => {
        this.props.removeArticle(id);
    };

    render() {
        const { list } = this.props;

        const listItems = list.map((item) => {
            return (
                <BlogListItem
                    key={item.id}
                    item={item}
                    onClick={this.onClick(item.id)}
                />
            );
        });

        return (
            <BlogListStyled>
                {listItems}
            </BlogListStyled>
        );
    }
}

export default connect(
    (state) => {
        return {
            list: filteredArticlesSelector(state),
        };
    },
    { loadAllArticles, removeArticle}
)(BlogList);

/* styles */
var BlogListStyled = styled(bemto('ul', {}))`
padding: 0;
margin: 0;
`;