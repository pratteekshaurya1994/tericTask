import {
    CODE_LOADING,
    CODE_LOAD_SUCCESS,
    CODE_LOAD_FAILURE,
} from "../action/returnTypes";

import { initialCodeState } from "../constants/offerConstant";

export const createCodeReducer = (state = initialCodeState, action) => {
    switch (action.type) {
        case CODE_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                message: "",
            };
        case CODE_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: "",
                data: action.data,
                list: action.list
            };
        case CODE_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.message,
            };
        default:
            return state;
    }
};
