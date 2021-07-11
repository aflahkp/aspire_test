import * as actionTypes from '../constants/actionTypes';

//Account
export const getAccountAction = () => ({
  type: actionTypes.getAccount,
});

export const updateAccountAction = payload => ({
  type: actionTypes.updateAccount,
  payload,
});

export const accountFailedAction = payload => ({
  type: actionTypes.accountFailed,
  payload,
});

//Spending Limit Options
export const getSpendingLimitOptionsAction = () => ({
  type: actionTypes.getSpendingLimitOptions,
});

export const updateSpendingLimitOptionsAction = payload => ({
  type: actionTypes.updateSpendingLimitOptions,
  payload,
});

export const spendingLimitOptionsFailedAction = payload => ({
  type: actionTypes.spendingLimitOptionsFailed,
  payload,
});

//Change Spending Limit
export const saveSpendingLimitAction = payload => ({
  type: actionTypes.saveSpendingLimit,
  payload,
});

export const updateSpendingLimitAction = payload => ({
  type: actionTypes.updateSpendingLimit,
  payload,
});

export const spendingLimitFailedAction = payload => ({
  type: actionTypes.spendingLimitFailed,
  payload,
});

//Update limit enabled
export const setWeeklyLimitEnabledAction = payload => ({
  type: actionTypes.setWeeklyLimitEnabled,
  payload,
});
