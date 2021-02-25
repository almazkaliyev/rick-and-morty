import { combineReducers } from 'redux';

import charactersReducer from './characters/reducer';
import episodesReducer from './episodes/reducer';
import locationsReducer from './locations/reducer';

const reducer = combineReducers({
  characters: charactersReducer,
  locations: locationsReducer,
  episodes: episodesReducer,
});

export default reducer;
