import { CODE } from "../action/types";
import {call, delay, put, takeLatest} from 'redux-saga/effects';

import {
  CODE_LOADING,
  CODE_LOAD_SUCCESS,
  CODE_LOAD_FAILURE,
} from "../action/returnTypes";



import {codeApi} from '../services/codeApi';

function* loadCodeWorker(action) {
    try {
        yield put({
          type: CODE_LOADING,
        });
        const res = yield call(codeApi, action.params);
        console.log("home: ",res);
        yield delay(2000);
        if (res != null) {
          yield action.onSuccess(res);
          yield put({
            type: CODE_LOAD_SUCCESS,
            data: res,
          });
        } else {
          yield action.onError('Something Went Wrong');
          yield put({
            type: CODE_LOAD_FAILURE,
            message: 'Something went wrong',
          });
        }
      } catch (error) {
        yield action.onError('eeSomething Went Wrong');
        yield put({
          type: CODE_LOAD_FAILURE,
          message: 'Something went wrong',
        });
      }
  }

export function* watchCode() {
    yield takeLatest(CODE, loadCodeWorker);
  }