import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import { changeSelection } from '../../ducks/filters';
import { mapToArr } from '../../utils';

import 'react-select/dist/react-select.css';

class SelectFilter extends Component {

    handleChange = selected => this.props.changeSelection(selected.map(option => option.value));

    render() {
        const {articles, selected} = this.props;
        const options = articles.map(article => ({
            label: article.author,
            value: article.id
        }));

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

SelectFilter.propTypes = {
    articles: PropTypes.array.isRequired
};

export default connect(state => ({
    selected: state.filters.selected,
    articles: mapToArr(state.articles.entities)
}), {changeSelection})(SelectFilter);