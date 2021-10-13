import * as actionTypes from './ActionsTypes';

export const transferStockRequest = (payload, callback) => ({
  type: actionTypes.TRANSFER_STOCK_REQUEST,
  payload,
  callback,
});

export const transferStockRequestSuccess = () => ({
  type: actionTypes.TRANSFER_STOCK_SUCCESS,
});

export const transferStockRequestError = payload => ({
  type: actionTypes.TRANSFER_STOCK_ERROR,
  payload,
});
