import { watchBestSeller } from "./saga/homeSaga";
  
  import {all} from 'redux-saga/effects';
  
  export default function* rootSaga() {
    yield all([watchBestSeller()]);
  }
  