import { call, put, takeLatest } from 'redux-saga/effects';

import * as Api from '../../api';
import {
  addLocations,
  setErrorMessage,
  setHasNextPage,
  setLocations,
  setSelectedLocation,
} from './actions';
import * as ActionTypes from './actionTypes';

function* fetchLocations(action) {
  try {
    let res;
    if (action.payload) {
      res = yield call(Api.fetchLocations, action.payload);
      yield put(addLocations(res.results));
    } else {
      res = yield call(Api.fetchLocations);
      yield put(setLocations(res.results));
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

function* fetchSingleLocation(action) {
  try {
    const character = yield call(Api.fetchLocationById, action.payload);
    yield put(setSelectedLocation(character));
  } catch (e) {
    yield put(setErrorMessage(e.message));
  }
}

export default function* locationsSaga() {
  yield takeLatest(ActionTypes.FETCH_LOCATIONS, fetchLocations);
  yield takeLatest(ActionTypes.SET_PAGE, fetchLocations);
  yield takeLatest(ActionTypes.FETCH_SINGLE_LOCATION, fetchSingleLocation);
}
