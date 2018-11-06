import { createStore } from 'redux'
import { Map } from 'immutable'
import { combineReducers } from 'redux-immutable'
import authReducer from './reducers/authReducer'

const initialState = Map()
const rootReducer = combineReducers({
  authReducer,
})

const Store = createStore(rootReducer, initialState)

export default Store
