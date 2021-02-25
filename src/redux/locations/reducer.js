/* eslint-disable no-param-reassign */
import produce from 'immer';

import * as ActionTypes from './actionTypes';

const initialState = {
  items: [],
  page: {
    number: 1,
    hasNext: false,
  },
  selected: {},
  isLoading: false,
  errorMessage: '',
};

const charactersReducer = produce((draft, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_LOCATIONS:
      draft.isLoading = true;
      break;

    case ActionTypes.SET_LOCATIONS:
      draft.isLoading = false;
      draft.items = action.payload;
      break;

    case ActionTypes.ADD_LOCATIONS:
      draft.isLoading = false;
      draft.items = draft.items.concat(action.payload);
      break;

    case ActionTypes.FETCH_SINGLE_LOCATION:
      draft.isLoading = true;
      break;

    case ActionTypes.SET_SELECTED_LOCATION:
      draft.isLoading = false;
      draft.selected = action.payload;
      break;

    case ActionTypes.SET_PAGE:
      draft.page.number = action.payload;
      break;

    case ActionTypes.SET_HAS_NEXT_PAGE:
      draft.page.hasNext = action.payload;
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
