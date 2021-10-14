import * as ActionTypes from './ActionsTypes';

const initialState = {isModalOpen: false, modalKey: null, params: {}};

const modalState = (state = initialState, {type, payload, params}) => {
  switch (type) {
    case ActionTypes.OPEN_MODAL:
      return {...state, isModalOpen: true, modalKey: payload, params};

    case ActionTypes.CLOSE_MODAL:
      return {...state, isModalOpen: false};

    default:
      return state;
  }
};

export default modalState;
