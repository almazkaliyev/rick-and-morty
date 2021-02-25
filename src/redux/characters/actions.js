import * as ActionTypes from './actionTypes';

export const fetchCharacters = () => ({
  type: ActionTypes.FETCH_CHARACTERS,
});

export const setCharacters = (items) => ({
  type: ActionTypes.SET_CHARACTERS,
  payload: items,
});

export const addCharacters = (items) => ({
  type: ActionTypes.ADD_CHARACTERS,
  payload: items,
});

export const fetchCharacterById = (id) => ({
  type: ActionTypes.FETCH_SINGLE_CHARACTER,
  payload: id,
});

export const setSelectedCharacter = (item) => ({
  type: ActionTypes.SET_SELECTED_CHARACTER,
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
