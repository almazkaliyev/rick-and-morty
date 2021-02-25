/* eslint-disable no-param-reassign */
import produce from 'immer';

import * as ActionTypes from './actionTypes';

const initialState = {
  items: [],
  selected: {},
  isLoading: false,
  errorMessage: '',
};

const charactersReducer = produce((draft, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CHARACTERS:
      draft.isLoading = true;
      break;

    case ActionTypes.SET_CHARACTERS:
      draft.isLoading = false;
      draft.items = action.payload;
      break;

    case ActionTypes.ADD_CHARACTERS:
      draft.isLoading = false;
      draft.items = draft.items.concat(action.payload);
      break;

    case ActionTypes.FETCH_SINGLE_CHARACTER:
      draft.isLoading = true;
      break;

    case ActionTypes.SET_SELECTED_CHARACTER:
      draft.isLoading = false;
      draft.selected = action.payload;
      break;

    case ActionTypes.SET_ERROR_MESSAGE:
      draft.isLoading = false;
      draft.errorMessage = action.payload;
      break;

    default:
      break;
  }
}, initialState);

export default charactersReducer;
