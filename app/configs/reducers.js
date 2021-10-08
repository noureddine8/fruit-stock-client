import {combineReducers} from 'redux';
import storeReducer from '../containers/Home/store/reducer';
export const reducers = combineReducers({stores: storeReducer});
