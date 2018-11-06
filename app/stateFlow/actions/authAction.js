/*
 * action creators
 */

import { AUTH_TO_SERVER } from "../types/authType";
​
export const authToServer = (user) => {
  return { type: AUTH_TO_SERVER, payload: user }
}