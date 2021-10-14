import {combineReducers} from 'redux';
import storeReducer from '../containers/Home/store/reducer';
import transferReducer from '../containers/TransferItem/store/reducer';
import modalReducer from '../containers/Modal/store/reducer';

export const reducers = combineReducers({
  storeState: storeReducer,
  transferState: transferReducer,
  modalState: modalReducer,
});
