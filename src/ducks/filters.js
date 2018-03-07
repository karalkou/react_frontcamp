import { Record } from 'immutable';
import { createSelector } from 'reselect'
import { mapToArr } from '../utils'
import { appName } from '../config';
// import { call, put, takeEvery } from 'redux-saga/effects';

/**
 * Constants
 * */
export const moduleName = 'filters';
const prefix = `${appName}/${moduleName}`;

export const FILTER_BY_AUTHOR_ALPHABET = `${prefix}/FILTER_BY_AUTHOR_ALPHABET`;
export const CHANGE_SELECTION = `${prefix}/CHANGE_SELECTION`;

/**
 * Reducer
 * */
const byAuthorAlphabetModel = Record({
    isSorted: false,
    direction: -1
});

export const ReducerRecord = Record({
    byAuthorAlphabet: new byAuthorAlphabetModel(),
    selected: [],
});

export default function reducer(state = new ReducerRecord(), action) {
    const {type, payload} = action;

    switch (type) {
        case FILTER_BY_AUTHOR_ALPHABET:
            return state
                .setIn(['byAuthorAlphabet'], new byAuthorAlphabetModel(payload));

        case CHANGE_SELECTION:
            return state.set('selected', payload.selected);

        default:
            return state;
    }
}

/**
 * Selectors
 * */
const articlesGetter = state => state.articles.entities;
const filtersGetter = state => state.filters;

export const filteredArticlesSelector = createSelector(
    articlesGetter,
    filtersGetter,
    (entities, filters) => {
        const articles = mapToArr(entities);
        const {selected} = filters;

        return articles.filter(article => {
            return (!selected.length || selected.includes(article.id));
        })
    }
);

/**
 * Action Creators
 * */
export function filterByAuthorAlphabet(direction) {
    return {
        type: FILTER_BY_AUTHOR_ALPHABET,
        payload: direction,
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: {selected},
    }
}

/**
 * Sagas
 **/