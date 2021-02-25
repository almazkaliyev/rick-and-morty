import { call, put, takeLatest } from 'redux-saga/effects';

import * as Api from '../../api';
import {
  addEpisodes,
  setEpisodes,
  setErrorMessage,
  setHasNextPage,
} from './actions';
import * as ActionTypes from './actionTypes';

function* fetchEpisodes(action) {
  try {
    let res;
    if (action.payload) {
      res = yield call(Api.fetchEpisodes, action.payload);
      yield put(addEpisodes(res.results));
    } else {
      res = yield call(Api.fetchEpisodes);
      yield put(setEpisodes(res.results));
    }

    if (res.info.next) {
      yield put(setHasNextPage(true));
    } else {
      yield put(setHasNextPage(false));
    }
  } catch (e) {
    yield put(setErrorMessage(e.message));
  }
}

export default function* episodesSaga() {
  yield takeLatest(ActionTypes.FETCH_EPISODES, fetchEpisodes);
  yield takeLatest(ActionTypes.SET_PAGE, fetchEpisodes);
}
