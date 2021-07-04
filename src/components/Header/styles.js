import {StyleSheet} from 'react-native';
import Theme from '../../theme';
import * as Fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  root: {
    backgroundColor: Theme.Colors.dark,
  },
  container: {
    backgroundColor: Theme.Colors.dark,
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  availableBalance: {
    fontFamily: Fonts.AvenirNextRegular,
    fontSize: 14,
    lineHeight: 16,
    color: Theme.Colors.textColorLight,
    marginTop: 24,
  },
  amount: {
    fontFamily: Fonts.AvenirNextBold,
    fontSize: 24,
    color: Theme.Colors.textColorLight,
  },
  sdollarContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 3,
    paddingHorizontal: 12,
    backgroundColor: Theme.Colors.primary,
    borderRadius: 8,
    marginEnd: 10,
  },
  sdollar: {
    fontFamily: Fonts.AvenirNextBold,
    fontSize: 12,
    color: Theme.Colors.textColorLight,
  },
  title: {
    fontFamily: Fonts.AvenirNextBold,
    fontSize: 24,
    color: Theme.Colors.textColorLight,
    marginTop: 32,
  },
  balanceContainer: {flexDirection: 'row', marginTop: 15,},
});

export default styles;
