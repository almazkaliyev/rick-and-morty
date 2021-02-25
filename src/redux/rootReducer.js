import { combineReducers } from 'redux';

import charactersReducer from './characters/reducer';
import locationsReducer from './locations/reducer';

const reducer = combineReducers({
  characters: charactersReducer,
  locations: locationsReducer,
});

export default reducer;
