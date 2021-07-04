import React, {useState} from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import styles from './styles';
import Theme from '../../theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import DebitCard from '../../components/DebitCard';
import MenuRow from '../../components/MenuRow';
import {insight, freez, limit, deactivate, newCard} from '../../assets/images';

const DebitCardScreen = () => {
  const [toggleValue, onToggle] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={Theme.Colors.dark} />
      <Header />
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.cardContainer}>
            <DebitCard />
          </View>
          <View style={styles.curve} />
        </View>
        <MenuRow
          icon={insight}
          title="Top-up account"
          subTitle="Deposit money to your account to use with card"
        />
        <MenuRow
          toggle
          toggleValue={toggleValue}
          onToggle={onToggle}
          icon={limit}
          title="Weekly spending limit"
          subTitle="Your weekly spending limit is S$ 5,000"
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default DebitCardScreen;
