// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import msgSendReducer from '../shared/reducer/msgSend'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.msgSend) {
    // flow-disable-next-line
    preloadedState.msgSend = msgSendReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.msgSend))
  }

  return createStore(combineReducers({ msgSend: msgSendReducer }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
