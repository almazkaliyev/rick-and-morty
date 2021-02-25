import { all } from 'redux-saga/effects';

import charactersSaga from './characters/sagas';
import episodesSaga from './episodes/sagas';
import locationsSaga from './locations/sagas';

function* rootSaga() {
  yield all([charactersSaga(), locationsSaga(), episodesSaga()]);
}

export default rootSaga;
