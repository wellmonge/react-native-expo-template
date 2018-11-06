/*
 * reducers
 */
import { fromJS } from 'immutable'
import { AUTH_TO_SERVER } from '../types/authType'

const pureState = {
  user: null,
}

const initialState = fromJS(pureState)

export default authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TO_SERVER:
      const newState = state.set('user', action.payload)
      return newState

    default:
      return state
  }
}
