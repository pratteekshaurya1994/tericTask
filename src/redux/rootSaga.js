import { watchBestSeller, watchFeatureBrand } from "./saga/homeSaga";
import { watchCode } from "./saga/offerSaga";
  
  import {all} from 'redux-saga/effects';
  
  export default function* rootSaga() {
    yield all([watchBestSeller(), watchFeatureBrand(), watchCode()]);
  }
  