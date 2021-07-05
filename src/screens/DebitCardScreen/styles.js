import {StyleSheet} from 'react-native';
import Theme from '../../theme';

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: Theme.Colors.screenBackground},
  scrollView: {marginTop: -90, zIndex: 10},
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
});

export default styles;
