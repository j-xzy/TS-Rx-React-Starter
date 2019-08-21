import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'type-redux';
import { createRxjsMiddleware } from 'type-redux-rxjs';
import * as observables from '../reducers/observable';
import { IReducers, IState } from './index';

export function store(initialState: IState, reducers: IReducers) {
  return createStore(initialState, reducers, applyMiddleware(createRxjsMiddleware(observables), createLogger()));
}
