import * as ActionTypes from './actionTypes';

export const fetchLocations = () => ({
  type: ActionTypes.FETCH_LOCATIONS,
});

export const setLocations = (items) => ({
  type: ActionTypes.SET_LOCATIONS,
  payload: items,
});

export const addLocations = (items) => ({
  type: ActionTypes.ADD_LOCATIONS,
  payload: items,
});

export const fetchLocationById = (id) => ({
  type: ActionTypes.FETCH_SINGLE_LOCATION,
  payload: id,
});

export const setSelectedLocation = (item) => ({
  type: ActionTypes.SET_SELECTED_LOCATION,
  payload: item,
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
