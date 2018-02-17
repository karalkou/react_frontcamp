import { appName } from '../config'
import { Record } from 'immutable'
import { createSelector } from 'reselect'
// import { call, put, all, take } from 'redux-saga/effects'
// import { replace } from 'react-router-redux'

/**
 * Constants
 * */
export const moduleName = 'blogs';
const prefix = `${appName}/${moduleName}`;

export const LOAD_ALL_ARTICLES = `${prefix}/LOAD_ALL_ARTICLES`;
export const ADD_ARTICLE = `${prefix}/ADD_ARTICLE`;
export const REMOVE_ARTICLE = `${prefix}/REMOVE_ARTICLE`;

/**
 * Reducer
 * */
export const ReducerRecord = Record({
    title: null,
    body: false
});

export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_ALL_ARTICLES:
            return state;

        case ADD_ARTICLE:
            return state
                .set('user', payload.user);

        case REMOVE_ARTICLE:
            return state;

        default:
            return state;
    }
}

/**
 * Selectors
 * */

/**
 * Action Creators
 * */
export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
    }
}
export function addArticle(title, body) {
    return {
        type: ADD_ARTICLE,
        payload: { title, body }
    }
}
export function removeArticle(id) {
    return {
        type: REMOVE_ARTICLE,
        payload: { id }
    }
}

/**
 * Sagas
 **/
// export function * saga() {
//     yield
// }