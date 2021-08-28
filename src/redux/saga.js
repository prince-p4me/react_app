import {call, takeLatest, put } from 'redux-saga/effects';
import * as Apiservice from '../services/Api';
import * as Actions from './action';
import * as Types from './types';
import { store } from './store';

function* addUser({ type, payload }) {
  try {
    console.log('init payload');
    let response = yield call(Apiservice.addUser, payload); //calling Api
    if (response && response?.status && response?.status == 1) {
      yield put({
        type: Types.USER,
        // payload: response?.term_condition,
      }); //set user
    }
  } catch (error) {
    console.log(error);
  }
}
// Watcher
export default function* watcher() {
  // Take Last Action Only
  yield takeLatest(Types.ADD_USER, addUser);
}
