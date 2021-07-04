import React from 'react';
import {StyleSheet} from 'react-native';
import * as Fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  tabBarIcon: {width: 23, height: 23, resizeMode: 'contain'},
  labelStyle: {
    textAlignVertical: 'center',
    marginBottom: 8,
    fontSize: 9,
    fontFamily: Fonts.AvenirNextDemi,
  },
  tabBarStyle: {borderTopWidth: 0},
});

export default styles;
