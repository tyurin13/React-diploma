import defaultState from '../store';
import { SET_REPOS, SET_IS_FETCHING, SET_CURRENT_PAGE, SET_FETCH_ERROR } from '../actions/actionNames'

const reposReducer = (state = defaultState, action) => {
  switch (action.type) {

    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items,
        totalCount: action.payload.total_count,
        isFetching: false
      }

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    case SET_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload
      }
    default:
      return state
  }
}

export default reposReducer