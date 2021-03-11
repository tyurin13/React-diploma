import { SET_REPOS, SET_CURRENT_PAGE, SET_IS_FETCHING, SET_FETCH_ERROR } from './actionNames'


export const setRepos = (repos) => ({ type: SET_REPOS, payload: repos });
export const setIsFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });
export const setFetchError = (bool) => ({ type: SET_FETCH_ERROR, payload: bool });
