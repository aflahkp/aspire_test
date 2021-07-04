import React from 'react';
import {StatusBar} from 'react-native';
import styles from './styles';
import Theme from '../../theme'
import {SafeAreaView} from 'react-native-safe-area-context';

const PlaneScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={Theme.Colors.dark} />
    </SafeAreaView>
  );
};

export default PlaneScreen;
