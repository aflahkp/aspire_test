import {StyleSheet} from 'react-native';
import Theme from '../../theme';
import * as Fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: Theme.Colors.screenBackground},
  cardContainer: {paddingHorizontal: 24},
  curve: {
    width: '100%',
    height: 40,
    backgroundColor: Theme.Colors.screenBackground,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
  },
  balanceContainer: {flexDirection: 'row', marginTop: 17},
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
    color: Theme.Colors.textColorBlack,
  },
  subTitle: {
    fontFamily: Fonts.AvenirNextDemi,
    fontSize: 14,
    color: Theme.Colors.textColorBlack,
    marginStart: 12,
  },
  limiOptionText: {
    fontFamily: Fonts.AvenirNextDemi,
    fontSize: 12,
    color: Theme.Colors.primary,
  },
  message: {
    fontFamily: Fonts.AvenirNextRegular,
    fontSize: 13,
    color: Theme.Colors.textColorGray,
    marginTop: 18,
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
  titleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  limitOptionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  dataContainer: {marginTop: -8, marginHorizontal: 24, flexGrow: 1},
  lightContainer: {
    backgroundColor: Theme.Colors.light,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4,
  },
  buttonStyle: {marginBottom: 24},
});

export default styles;
