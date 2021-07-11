import screenNames from '../../constants/screenNames';

export const getBalance = (spentAmount, limit) => {
  try {
    let balance = parseInt(limit, 10) - parseInt(spentAmount, 10);
    return balance || 0;
  } catch (e) {
    return 0;
  }
};

export const onToggle =
  ({toggleWeeklyLimitEnabled, navigate}) =>
  enabled => {
    toggleWeeklyLimitEnabled(enabled);
    if (enabled) {
      navigate(screenNames.spendingLimitScreen);
    }
  };
