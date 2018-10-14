/* @flow */

import RootReducer from './RootReducer';

import type {State as State$Root} from './RootReducer';

import {createStore, applyMiddleware, compose} from 'redux';

import {
  Dispatch as DispatchTemplate,
  MiddlewareAPI as MiddlewareAPITemplate,
  Store as StoreTemplate,
} from 'redux';

export type Dispatch = DispatchTemplate<PureAction>;
export type MiddlewareAPI = MiddlewareAPI<ReduxState, PureAction, Dispatch>;
export type PureActions = {type: 'DUMMY_ACTION'};
export type ReactReduxProps = {dispatch: Dispatch};
export type ReduxState = State$Root;
export type ReduxStore = StoreTemplate<ReduxState, PureAction, Dispatch>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(RootReducer, composeEnhancers(applyMiddleware()));
