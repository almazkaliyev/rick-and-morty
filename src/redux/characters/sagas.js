import { call, put, takeLatest } from 'redux-saga/effects';

import * as Api from '../../api';
import {
  setCharacters,
  setErrorMessage,
  setSelectedCharacter,
} from './actions';
import * as ActionTypes from './actionTypes';

function* fetchCharacters() {
  try {
    const { results } = yield call(Api.fetchCharacters);
    yield put(setCharacters(results));
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
  yield takeLatest(ActionTypes.FETCH_SINGLE_CHARACTER, fetchSingleCharacter);
}
