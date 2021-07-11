import {StyleSheet} from 'react-native';
import Theme from '../../theme';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: Theme.Colors.dark},
  scrollView: {
    marginTop: -90,
    zIndex: 10,
  },
  scrollPadding: {height: 100},
  menuContainer: {
    backgroundColor: Theme.Colors.screenBackground,
  },
  cardContainer: {paddingHorizontal: 24},
  curve: {
    width: '100%',
    height: '100%',
    backgroundColor: Theme.Colors.screenBackground,
    position: 'absolute',
    top: 68,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    zIndex: -1,
  },
  progressStyle: {marginTop: 24},
  bottomSpacing: {
    height: 24,
    width: '100%',
    marginTop: -1,
    backgroundColor: Theme.Colors.screenBackground,
  },
});

export default styles;
