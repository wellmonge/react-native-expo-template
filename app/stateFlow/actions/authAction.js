/*
 * action creators
 */
import { fromJS } from 'immutable'
import { AUTH_TO_SERVER } from '../types/authType'

const authToServer = user => fromJS({ type: AUTH_TO_SERVER, payload: user })

export default authToServer
