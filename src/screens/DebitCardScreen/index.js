import React, {useState, useEffect} from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import styles from './styles';
import Theme from '../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import DebitCard from '../../components/DebitCard';
import MenuRow from '../../components/MenuRow';
import SpendingProgress from '../../components/SpendingProgress';
import {insight, limit, deactivate, newCard} from '../../assets/images';
import strings from '../../constants/strings';
import {getAccountAction, setWeeklyLimitEnabledAction} from '../../actions';
import {connect} from 'react-redux';
import {getBalance, onToggle} from './helpers';

const DebitCardScreen = ({
  navigation: {navigate},
  getAccount,
  spending_limit,
  spent_amount,
  username,
  card_no,
  card_expiry,
  card_cvv,
  weekly_limit_enabled = false,
  toggleWeeklyLimitEnabled,
}) => {

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={Theme.Colors.dark} />
      <Header
        showBalance
        balance={getBalance(spent_amount, spending_limit)}
        title={strings.debitCard}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollPadding} />
        <View>
          <View style={styles.cardContainer}>
            <DebitCard {...{username, card_no, card_expiry, card_cvv}} />
          </View>
          <View style={styles.curve} />
        </View>
        <View style={styles.menuContainer}>
          <SpendingProgress
            amountSpent={spent_amount}
            limitAmount={spending_limit}
            style={styles.progressStyle}
          />
          <MenuRow
            icon={insight}
            title="Top-up account"
            subTitle="Deposit money to your account to use with card"
          />
          <MenuRow
            toggle
            toggleValue={weekly_limit_enabled}
            onToggle={onToggle({toggleWeeklyLimitEnabled, navigate})}
            icon={limit}
            title="Weekly spending limit"
            subTitle={`Your weekly spending limit is S$ ${spending_limit}`}
          />
          <MenuRow
            toggle
            icon={limit}
            title="Freeze"
            subTitle="Your debit card is currently active"
          />
          <MenuRow
            icon={newCard}
            title="Get a new card"
            subTitle="This deactivates your current debit card"
          />
          <MenuRow
            icon={deactivate}
            title="Deactivated cards"
            subTitle="Your previously deactivated cards"
          />
        </View>
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = ({
  username,
  card_no,
  card_expiry,
  card_cvv,
  spent_amount,
  spending_limit,
  weekly_limit_enabled,
}) => ({
  username,
  card_no,
  card_expiry,
  card_cvv,
  spent_amount,
  spending_limit,
  weekly_limit_enabled,
});

const mapDispatchToProps = dispatch => {
  return {
    getAccount: () => dispatch(getAccountAction()),
    toggleWeeklyLimitEnabled: enabled =>
      dispatch(setWeeklyLimitEnabledAction(enabled)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebitCardScreen);
