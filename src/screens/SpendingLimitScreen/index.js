import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, Image, Pressable} from 'react-native';
import styles from './styles';
import Theme from '../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import strings from '../../constants/strings';
import {meter} from '../../assets/images';
import Button from '../../components/Button';
import {onSave} from './helpers';
import {connect} from 'react-redux';
import {
  getSpendingLimitOptionsAction,
  saveSpendingLimitAction,
} from '../../actions';

const SpendingLimitScreen = ({
  navigation: {goBack},
  spending_limit,
  spending_limits,
  getSpendingLimitOptions,
  saveSpendingLimit,
}) => {
  const [selectedSpendingLimit, setSelectedSpendingLimit] =
    useState(spending_limit);

  useEffect(() => {
    getSpendingLimitOptions();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={Theme.Colors.dark} />
      <Header back goBack={goBack} title={strings.spendingLimit} />
      <View style={styles.curve} />
      <View style={styles.dataContainer}>
        <View style={styles.titleWithIcon}>
          <Image source={meter} />
          <Text style={styles.subTitle}>{strings.setWeeklyDebitLimit}</Text>
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.sdollarContainer}>
            <Text style={styles.sdollar}>{strings.sdollar}</Text>
          </View>
          <Text style={styles.amount}>{spending_limit}</Text>
        </View>
        <Text style={styles.message}>{strings.weekDefenition}</Text>
        <View style={styles.limitOptionsRow}>
          {spending_limits.map(limit => (
            <Pressable
              onPress={() => setSelectedSpendingLimit(limit.amount)}
              key={`${limit.id}`}
              style={[
                styles.lightContainer,
                (selectedSpendingLimit || spending_limit) === limit?.amount &&
                  styles.highlighted,
              ]}>
              <Text style={styles.limiOptionText}>
                {strings.sdollar} {limit.amount}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <Button
        title={strings.save}
        style={styles.buttonStyle}
        onPress={onSave({saveSpendingLimit, selectedSpendingLimit})}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = ({spending_limit, spending_limits}) => ({
  spending_limit,
  spending_limits,
});

const mapDispatchToProps = dispatch => {
  return {
    getSpendingLimitOptions: () => dispatch(getSpendingLimitOptionsAction()),
    saveSpendingLimit: limit => dispatch(saveSpendingLimitAction(limit)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpendingLimitScreen);
