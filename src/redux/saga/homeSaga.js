import { BEST_SELLER } from "../action/types";
import {call, delay, put, takeLatest} from 'redux-saga/effects';

import {bestSellerApi} from '../services/bestSellerApi';

function* loadBestSellerWorker(action) {
    try {
      yield put({
        type: PRODUCT_LOADING,
      });
      const res = yield call(bestSellerApi, action.params);
      yield delay(2000);
      if (res != null) {
        yield action.onSuccess();
      } else {
        yield action.onError('eeSomething Went Wrong');
      }
    } catch (error) {
        yield action.onError('eeSomething Went Wrong');
    }
  }


export function* watchBestSeller() {
    yield takeLatest(BEST_SELLER, loadBestSellerWorker);
  }