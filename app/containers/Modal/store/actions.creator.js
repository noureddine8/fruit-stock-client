import * as actionTypes from './ActionsTypes';

export const openModal = (payload, params) => ({
  type: actionTypes.OPEN_MODAL,
  payload,
  params,
});
export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL,
});
