export const onSave =
  ({saveSpendingLimit, selectedSpendingLimit}) =>
  () => {
    if (selectedSpendingLimit) {
      saveSpendingLimit(selectedSpendingLimit);
    }
  };
