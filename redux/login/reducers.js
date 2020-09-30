import {
    CHANGE_EMAIL,
    CHANGE_PASSWORD, 
} from './actions';

const defaultState = {
    email: null,
    password: null,
}

export const loginReducer = (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
    }
    return state;
}