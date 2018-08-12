// @flow

import Immutable from 'immutable'
import type {fromJS as Immut} from 'immutable'

import {MSG_SEND} from '../action/msgSend'

const initialState = Immutable.fromJS({
  message: 'Hi! this is the Home page'
})

const msgSendReducer = (state:Immut = initialState, action: {type: string, payload: any }) => {
  switch (action.type) {
    case MSG_SEND:
      return state.set('message', action.payload)
    default:
      return state
  }
}

export default msgSendReducer
