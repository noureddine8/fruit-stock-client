import * as actionTypes from './ActionsTypes';

export const getStoreRequest = (payload, callback) => ({
  type: actionTypes.GET_STORE_REQUEST,
  payload,
  callback,
});

export const getStoreRequestSuccess = payload => ({
  type: actionTypes.GET_STORE_SUCCESS,
  payload,
});

export const getStoreRequestError = error => ({
  type: actionTypes.GET_STORE_ERROR,
  error,
});
