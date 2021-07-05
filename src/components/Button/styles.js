import {StyleSheet} from 'react-native';
import Theme from '../../theme';
import * as Fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    width: '70%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Theme.Colors.primary,
    paddingVertical: 16,
    borderRadius: 30,
  },
  title: {
    fontFamily: Fonts.AvenirNextDemi,
    fontSize: 16,
    color: Theme.Colors.textColorLight,
  },
});

export default styles;
