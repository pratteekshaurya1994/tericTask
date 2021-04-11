import { BEST_SELLER, FEATURE_BRAND } from "../action/types";
import {call, delay, put, takeLatest} from 'redux-saga/effects';

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


import {bestSellerApi} from '../services/bestSellerApi';
import {featureBrandApi} from '../services/featureBrandApi';

function* loadBestSellerWorker(action) {
    try {
        yield put({
          type: BEST_SELLER_LOADING,
        });
        const res = yield call(bestSellerApi, action.params);
        console.log("home: ",res);
        yield delay(2000);
        if (res != null) {
          yield action.onSuccess(res);
          yield put({
            type: BEST_SELLER_LOAD_SUCCESS,
            data: res,
          });
        } else {
          yield action.onError('Something Went Wrong');
          yield put({
            type: BEST_SELLER_LOAD_FAILURE,
            message: 'Something went wrong',
          });
        }
      } catch (error) {
        yield action.onError('eeSomething Went Wrong');
        yield put({
          type: BEST_SELLER_LOAD_FAILURE,
          message: 'Something went wrong',
        });
      }
  }

  function* loadFeatureBrandWorker(action) {
    try {
        yield put({
          type: FEATURE_BRAND_LOADING,
        });
        const res = yield call(featureBrandApi, action.params);
        console.log("home: ",res);
        yield delay(2000);
        if (res != null) {
          yield action.onSuccess(res);
          yield put({
            type: FEATURE_BRAND_LOAD_SUCCESS,
            data: res,
          });
        } else {
          yield action.onError('Something Went Wrong');
          yield put({
            type: FEATURE_BRAND_LOAD_FAILURE,
            message: 'Something went wrong',
          });
        }
      } catch (error) {
        yield action.onError('eeSomething Went Wrong');
        yield put({
          type: FEATURE_BRAND_LOAD_FAILURE,
          message: 'Something went wrong',
        });
      }
  }


export function* watchBestSeller() {
    yield takeLatest(BEST_SELLER, loadBestSellerWorker);
  }
export function* watchFeatureBrand() {
    yield takeLatest(FEATURE_BRAND, loadFeatureBrandWorker);
  }