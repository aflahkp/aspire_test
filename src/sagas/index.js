import {call, put, takeEvery, all, fork} from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import * as urls from '../constants/urls';
import axiosInstance from '../network';
import {
  updateAccountAction,
  updateSpendingLimitOptionsAction,
  accountFailedAction,
  spendingLimitOptionsFailedAction,
  updateSpendingLimitAction,
  spendingLimitFailedAction,
} from '../actions';
import {goBack} from '../navigation/helpers';

function* handleGetAccount(action) {
  try {
    const apiConfig = {
      method: 'get',
      url: urls.account,
    };
    const response = yield call(axiosInstance, apiConfig);
    yield put(updateAccountAction(response.data));
  } catch (e) {
    yield put(accountFailedAction(e.message));
  }
}

function* handleGetSpendingLimitOptions(action) {
  try {
    const apiConfig = {
      method: 'get',
      url: urls.spendingLimits,
    };
    const response = yield call(axiosInstance, apiConfig);
    yield put(updateSpendingLimitOptionsAction(response.data));
  } catch (e) {
    yield put(spendingLimitOptionsFailedAction(e.message));
  }
}

function* handleSaveSpendingLimit(action) {
  try {
    const apiConfig = {
      method: 'post',
      url: urls.updateSpendingLimit,
    };
    //Post API call wont reflect in account api as there is no database.
    //Limit value is updated directly to state.
    // const response = yield call(axiosInstance, apiConfig);
    yield put(updateSpendingLimitAction(action.payload));
    setTimeout(() => {
      goBack();
    }, 1000);
  } catch (e) {
    yield put(spendingLimitFailedAction(e.message));
  }
}

export function* watchGetAccount() {
  yield takeEvery(actionTypes.getAccount, handleGetAccount);
}

export function* watchGetSpendingLimitOptions() {
  yield takeEvery(
    actionTypes.getSpendingLimitOptions,
    handleGetSpendingLimitOptions,
  );
}

export function* watchSaveSpendingLimit() {
  yield takeEvery(actionTypes.saveSpendingLimit, handleSaveSpendingLimit);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAccount),
    fork(watchGetSpendingLimitOptions),
    fork(watchSaveSpendingLimit),
  ]);
}
