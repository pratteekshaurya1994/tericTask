import rootSaga from './rootSaga';
import combineReducer from './combineReducer';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
