import * as actionTypes from './ActionsTypes';

export const getStoresRequest = (payload, callback) => ({
  type: actionTypes.GET_STORE_REQUEST,
  payload,
  callback,
});

export const getStoresRequestSuccess = payload => ({
  type: actionTypes.GET_STORE_SUCCESS,
  payload,
});

export const getStoresRequestError = () => ({
  type: actionTypes.GET_STORE_ERROR,
});
