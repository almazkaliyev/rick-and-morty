import { all } from 'redux-saga/effects';

import charactersSaga from './characters/sagas';
import locationsSaga from './locations/sagas';

function* rootSaga() {
  yield all([charactersSaga(), locationsSaga()]);
}

export default rootSaga;
