/*
 * reducers
 */
import { fromJS } from 'immutable'
import { AUTH_TO_SERVER } from '../types/authType'

const pureState = {
  user: null,
}

const initialState = fromJS(pureState)

const authReducer = (state = initialState, action) => {
  if (action.type === AUTH_TO_SERVER) {
    const newState = state.set('user', action.payload)
    return newState
  }
  return state
}

export default authReducer
