import {applyMiddleware, createStore} from 'redux';
import {reducers} from './reducers';
import createSagaMiddleware from 'redux-saga';
import getStoreSaga from '../containers/Home/store/saga';
import transferStockSaga from '../containers/TransferItem/store/saga';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(getStoreSaga);
sagaMiddleWare.run(transferStockSaga);
