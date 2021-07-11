import {StyleSheet} from 'react-native';
import Theme from '../../theme';
import * as Fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  textContainer: {flexDirection: 'row', alignItems: 'center'},
  title: {
    fontFamily: Fonts.AvenirNextMedium,
    fontSize: 14,
    lineHeight: 19,
    color: Theme.Colors.textColorBlack,
    flex: 1,
  },
  limitAmount: {
    fontFamily: Fonts.AvenirNextMedium,
    fontSize: 13,
    color: Theme.Colors.textColorLightGray,
  },
  amountSpent: {
    fontFamily: Fonts.AvenirNextDemi,
    fontSize: 13,
    color: Theme.Colors.primary,
  },
  divider: {
    fontFamily: Fonts.AvenirNextRegular,
    fontSize: 13,
    color: Theme.Colors.textColorGray,
    marginHorizontal: 8,
  },
  progressContainer: {
    width: '100%',
    height: 15,
    borderRadius: 30,
    marginTop: 8,
    backgroundColor: Theme.Colors.light,
  },
  currentProgress: {
    height: 0,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopWidth: 15,
    borderBottomWidth: 0,
    borderRightWidth: 15,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: Theme.Colors.primary,
  },
});

export default styles;
