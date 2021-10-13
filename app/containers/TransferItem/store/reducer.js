import * as ActionTypes from './ActionsTypes';

const initialState = {loading: false, error: null};

const transferState = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.TRANSFER_STOCK_REQUEST:
      return {...state, loading: true};

    case ActionTypes.TRANSFER_STOCK_SUCCESS:
      return {...state, loading: false};

    case ActionTypes.TRANSFER_STOCK_ERROR:
      return {...state, loading: false, error: payload};

    default:
      return state;
  }
};

export default transferState;
