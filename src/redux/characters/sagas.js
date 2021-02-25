import { call, put, takeLatest } from 'redux-saga/effects';

import * as Api from '../../api';
import {
  addCharacters,
  setCharacters,
  setErrorMessage,
  setHasNextPage,
  setSelectedCharacter,
} from './actions';
import * as ActionTypes from './actionTypes';

function* fetchCharacters() {
  try {
    const res = yield call(Api.fetchCharacters);
    if (res.info.next) {
      yield put(setHasNextPage(true));
    } else {
      yield put(setHasNextPage(false));
    }
    yield put(setCharacters(res.results));
  } catch (e) {
    yield put(setErrorMessage(e.message));
  }
}

function* fetchNextCharacters(action) {
  try {
    const res = yield call(Api.fetchCharacters, action.payload);
    if (res.info.next) {
      yield put(setHasNextPage(true));
    } else {
      yield put(setHasNextPage(false));
    }
    yield put(addCharacters(res.results));
  } catch (e) {
    yield put(setErrorMessage(e.message));
  }
}

function* fetchSingleCharacter(action) {
  try {
    const character = yield call(Api.fetchCharacterById, action.payload);
    yield put(setSelectedCharacter(character));
  } catch (e) {
    yield put(setErrorMessage(e.message));
  }
}

export default function* charactersSaga() {
  yield takeLatest(ActionTypes.FETCH_CHARACTERS, fetchCharacters);
  yield takeLatest(ActionTypes.SET_PAGE, fetchNextCharacters);
  yield takeLatest(ActionTypes.FETCH_SINGLE_CHARACTER, fetchSingleCharacter);
}
