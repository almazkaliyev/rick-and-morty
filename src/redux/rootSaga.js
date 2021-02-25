import { all } from 'redux-saga/effects';

import charactersSaga from './characters/sagas';

function* rootSaga() {
  yield all([charactersSaga()]);
}

export default rootSaga;
