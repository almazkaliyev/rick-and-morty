import * as ActionTypes from './actionTypes';

export const fetchEpisodes = () => ({
  type: ActionTypes.FETCH_EPISODES,
});

export const setEpisodes = (items) => ({
  type: ActionTypes.SET_EPISODES,
  payload: items,
});

export const addEpisodes = (items) => ({
  type: ActionTypes.ADD_EPISODES,
  payload: items,
});

export const setPage = (page) => ({
  type: ActionTypes.SET_PAGE,
  payload: page,
});

export const setHasNextPage = (value) => ({
  type: ActionTypes.SET_HAS_NEXT_PAGE,
  payload: value,
});

export const setErrorMessage = (errorMessage) => ({
  type: ActionTypes.SET_ERROR_MESSAGE,
  payload: errorMessage,
});
