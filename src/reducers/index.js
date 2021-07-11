import * as actionTypes from '../constants/actionTypes';

const initalState = {
  username: '',
  card_no: '',
  card_expiry: '',
  card_cvv: '',
  spent_amount: '',
  spending_limit: '',
  spending_limits: [],
  weekly_limit_enabled: false,
};

export default function debitReducer(state = initalState, action) {
  switch (action.type) {
    case actionTypes.updateAccount:
      return {...state, ...(action.payload?.account || {})};

    case actionTypes.updateSpendingLimitOptions:
      return {...state, spending_limits: action.payload?.options || []};

    case actionTypes.updateSpendingLimit:
      return {...state, spending_limit: action.payload};

    case actionTypes.setWeeklyLimitEnabled:
      return {...state, weekly_limit_enabled: action.payload};

    default:
      return state;
  }
}
