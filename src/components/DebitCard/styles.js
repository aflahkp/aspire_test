import {StyleSheet} from 'react-native';
import Theme from '../../theme';
import * as Fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 24,
    borderRadius: 12,
    backgroundColor: Theme.Colors.primary,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  cardLogoContainer: {flexDirection: 'row', alignSelf: 'flex-end'},
  logo: {height: 21, width: 21, resizeMode: 'contain'},
  cardLogo: {height: 20, width: 60, resizeMode: 'contain'},
  cardeyeIcon: {height: 16, width: 16, resizeMode: 'contain'},
  cardNumberContainer: {flexDirection: 'row', marginTop: 24},
  cardNumber: {
    marginEnd: 24,
    fontSize: 14,
    letterSpacing: 4,
    fontFamily: Fonts.AvenirNextDemi,
    color: Theme.Colors.textColorLight,
  },
  labelText: {
    fontSize: 13,
    letterSpacing: 1.56,
    lineHeight: 18,
    fontFamily: Fonts.AvenirNextDemi,
    color: Theme.Colors.textColorLight,
  },
  aspireText: {
    fontSize: 18,
    letterSpacing: 1.56,
    lineHeight: 18,
    marginStart: 4,
    fontFamily: Fonts.AvenirNextDemi,
    color: Theme.Colors.textColorLight,
    textAlignVertical: 'center',
  },
  hideCardNumber: {
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 20,
    marginStart: 4,
    fontFamily: Fonts.AvenirNextDemi,
    color: Theme.Colors.primary,
    textAlignVertical: 'center',
  },
  userName: {
    fontSize: 22,
    lineHeight: 20,
    letterSpacing: 0.53,
    marginTop: 24,
    fontFamily: Fonts.AvenirNextBold,
    color: Theme.Colors.textColorLight,
  },
  dateText: {
    fontSize: 13,
    fontFamily: Fonts.AvenirNextDemi,
    color: Theme.Colors.textColorLight,
  },
  cvvText: {
    fontSize: 13,
    fontFamily: Fonts.AvenirNextDemi,
    color: Theme.Colors.textColorLight,
  },
  hidden: {fontSize: 20},
  cardFooterRow: {flexDirection: 'row', marginTop: 15},
  dateRow: {flexDirection: 'row'},
  cvvRow: {flexDirection: 'row', marginStart: 32},
  visibilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: Theme.Colors.screenBackground,
    paddingBottom: 16,
    paddingHorizontal: 8,
    marginBottom: -12,
    marginRight: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
});

export default styles;
