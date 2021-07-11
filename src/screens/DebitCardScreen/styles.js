import {StyleSheet} from 'react-native';
import Theme from '../../theme';
const headerHeight = 160;

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: Theme.Colors.dark},
  scrollView: {
    flex: 1,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: headerHeight,
  },
  scrollPadding: {height: headerHeight},
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
