import { createStore } from "redux";
import { combineReducers } from 'redux-immutable';
import authReducer from './reducers/authReducer';

const initialState = Immutable.Map();
const rootReducer = combineReducers({
  authReducer,
});

const Store = createStore(rootReducer, initialState);

export { Store };
