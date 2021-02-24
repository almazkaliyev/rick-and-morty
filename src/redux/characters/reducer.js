import produce from 'immer';

const initialState = {
  items: [],
  isLoading: false,
  errorMessage: '',
};

const charactersReducer = produce((draft, action) => {
  switch (action.type) {
    default:
      break;
  }
}, initialState);

export default charactersReducer;
