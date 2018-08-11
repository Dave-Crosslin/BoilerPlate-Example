// @flow

import 'isomorphic-fetch'
import {createAction} from 'redux-actions'

export const MSG_SEND = 'MSG_SEND'

export const msgSend = createAction(MSG_SEND)
