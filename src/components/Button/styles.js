import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../theme';
import * as Fonts from '../../theme/fonts';
const {width: deviceWidth} = Dimensions.get('window');
const buttonMargin = 56;
const buttonWidth = deviceWidth - 2 * buttonMargin;

const styles = StyleSheet.create({
  container: {
    width: buttonWidth,
    height: 56,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.Colors.primary,
    borderRadius: 30,
  },
  title: {
    fontFamily: Fonts.AvenirNextDemi,
    fontSize: 16,
    lineHeight: 20,
    color: Theme.Colors.textColorLight,
  },
});

export default styles;
