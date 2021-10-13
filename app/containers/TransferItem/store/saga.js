import {all, call, put, takeLatest} from 'redux-saga/effects';
import * as actionTypes from './ActionsTypes';

import {
  transferStockRequestError,
  transferStockRequestSuccess,
} from './actions.creator';
import {transferFruits} from '../../../configs/apis';

export function* transferStockWorker({payload, callback}) {
  try {
    yield call(transferFruits, payload);
    yield put(transferStockRequestSuccess());
    yield call(callback);
  } catch (err) {
    yield put(transferStockRequestError(err.response.data.message));
  }
}

function* transferStockSaga() {
  yield all([
    takeLatest(actionTypes.TRANSFER_STOCK_REQUEST, transferStockWorker),
  ]);
}

export default transferStockSaga;
