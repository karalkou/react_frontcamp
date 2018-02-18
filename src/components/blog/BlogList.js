import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bemto from 'bemto-components';
import { connect } from 'react-redux';
import { loadAllArticles } from '../../ducks/articles';
import BlogListItem from './BlogListItem';
import { mapToArr } from "../../utils";

class BlogList extends Component {

    componentDidMount(){
        const { list, loadAllArticles } = this.props;
        if ( !list.length ) {
            loadAllArticles();
        }
    }

    onClick = (ev) => {
        console.log('ev.type: ', ev.type);
    };

    render() {
        const { list } = this.props;

        const listItems = list.map((item) => {
            return (
                <BlogListItem
                    key={item._id}
                    item={item}
                    onClick={this.onClick}
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
        console.log('--- state: ', mapToArr(state.articles.entities));
        return {
            list: mapToArr(state.articles.entities)
        };
    },
    { loadAllArticles }
)(BlogList);

/* styles */
var BlogListStyled = styled(bemto('ul', {}))`
padding: 0;
margin: 0;
`;