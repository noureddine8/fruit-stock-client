import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actionTypes from './ActionsTypes';

import {getStoreRequestError, getStoreRequestSuccess} from './actions.creator';
import {getStoreByCity} from '../../../configs/apis';

export function* getStoreWorker({payload, callback}) {
  try {
    const response = yield call(getStoreByCity, payload);
    yield put(getStoreRequestSuccess(response.data.store));
    yield call(callback);
  } catch (err) {
    yield put(getStoreRequestError(err));
  }
}

function* getStoreSaga() {
  yield all([takeLatest(actionTypes.GET_STORE_REQUEST, getStoreWorker)]);
}

export default getStoreSaga;
