import { AUTH_TO_SERVER } from "../types/authType";

const initialState = {
    user: null
}

export default authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_TO_SERVER:
            return {...state, user: action.payload };

        default:
            return state;
    }
}