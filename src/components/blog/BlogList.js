import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bemto from 'bemto-components';
import BlogListItem from './BlogListItem';

const BlogListStyled = styled(bemto('ul', {}))`
padding: 0;
margin: 0;
`;

class BlogList extends Component {

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

BlogList.propTypes = {
    list: PropTypes.array.isRequired,
};

export default BlogList;
