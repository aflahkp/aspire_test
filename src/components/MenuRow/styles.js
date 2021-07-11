import {StyleSheet} from 'react-native';
import Theme from '../../theme';
import * as Fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginVertical: 16,
    alignItems: 'flex-start',
  },
  textContainer: {marginStart: 12, flex: 1},
  title: {
    fontFamily: Fonts.AvenirNextMedium,
    fontSize: 14,
    height: 19,
    color: Theme.Colors.textColorBlack,
  },
  subTitle: {
    fontFamily: Fonts.AvenirNextRegular,
    fontSize: 13,
    color: Theme.Colors.textColorGray,
    marginTop: 2,
  },
  icon: {width: 32, height: 32},
});

export default styles;
