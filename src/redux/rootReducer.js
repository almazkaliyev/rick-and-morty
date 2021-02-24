import { combineReducers } from 'redux';

import charactersReducer from './characters/reducer';

const reducer = combineReducers({
  characters: charactersReducer,
});

export default reducer;
