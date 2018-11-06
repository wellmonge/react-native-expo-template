/*
 * action creators
 */
import { fromJS } from "immutable";
import { AUTH_TO_SERVER } from "../types/authType";
​
export const authToServer = (user) => {
  return fromJS({ type: AUTH_TO_SERVER, payload: user });
}