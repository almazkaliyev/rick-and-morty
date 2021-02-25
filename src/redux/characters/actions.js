import * as ActionTypes from './actionTypes';

export const fetchCharacters = () => ({
  type: ActionTypes.FETCH_CHARACTERS,
});

export const setCharacters = (items) => ({
  type: ActionTypes.SET_CHARACTERS,
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

export const setErrorMessage = (errorMessage) => ({
  type: ActionTypes.SET_ERROR_MESSAGE,
  payload: errorMessage,
});
