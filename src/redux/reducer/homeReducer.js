import {
    BEST_SELLER_LOADING,
BEST_SELLER_LOAD_SUCCESS,
BEST_SELLER_LOAD_FAILURE,
} from "../action/returnTypes";

import {
FEATURE_BRAND_LOADING,
FEATURE_BRAND_LOAD_SUCCESS,
FEATURE_BRAND_LOAD_FAILURE,
} from "../action/returnTypes";
import { initialBestSellerState } from "../constants/homeConstant";
import { initialFeatureBrandState } from "../constants/homeConstant";

export const createBestSellerReducer = (state = initialBestSellerState, action) => {
    switch (action.type) {
        case BEST_SELLER_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                message: "",
            };
        case BEST_SELLER_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: "",
                data: action.data,
                list: action.list
            };
        case BEST_SELLER_LOAD_FAILURE:
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
export const createFeatureBrandReducer = (state = initialFeatureBrandState, action) => {
    switch (action.type) {
        case FEATURE_BRAND_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                message: "",
            };
        case FEATURE_BRAND_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: "",
                data: action.data,
                list: action.list
            };
        case FEATURE_BRAND_LOAD_FAILURE:
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
