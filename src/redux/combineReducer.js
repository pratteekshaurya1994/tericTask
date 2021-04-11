import {dummyReducer} from './reducer/dummyReducer';
import {combineReducers} from 'redux';
import { createBestSellerReducer, createFeatureBrandReducer } from "../redux/reducer/homeReducer";
import { createCodeReducer } from "../redux/reducer/offerReducer";

export default combineReducers({
  dummyReducer,
  createBestSellerReducer,
  createFeatureBrandReducer,
  createCodeReducer
});
