import { reducers } from '@/store/createStore';
import * as observables from '@/store/reducers/observable';
import { initialState } from '@/store/state';
import { applyMiddleware, createStore } from 'type-redux';
import { createRxjsMiddleware } from 'type-redux-rxjs';

describe('observable', () => {
  let store = createStore(initialState, reducers, applyMiddleware(createRxjsMiddleware(observables)));

  beforeEach(() => {
    store = createStore(initialState, reducers, applyMiddleware(createRxjsMiddleware(observables)));
  });

  it('example', async () => {
    expect(store.getState().hello).toEqual('');
    await store.dispatch('getHelloFromRemote');
    expect(store.getState().hello).not.toEqual('');
  });
});
