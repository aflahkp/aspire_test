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
    flexDirection: 'row',
    overflow: 'hidden',
  },
  currentProgressTip: {
    height: 15,
    width: 4,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopWidth: 15,
    marginLeft: -5.1,
    borderTopColor: Theme.Colors.primary,
    borderLeftColor: 'transparent',
    borderRightWidth: 15,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    transform: [{scaleX: 0.3}],
  },
  currentProgress: {
    height: 15,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: Theme.Colors.primary,
  },
});

export default styles;
