import * as ActionTypes from './ActionsTypes';

const initialState = {loading: false, stores: []};

const storesState = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_STORE_SUCCESS:
      return {...state, loading: true};

    case ActionTypes.GET_STORE_SUCCESS:
      return {...state, loading: false, stores: action.payload};
    case ActionTypes.GET_STORE_ERROR:
      return {...state, loading: false};

    default:
      return state;
  }
};

export default storesState;
