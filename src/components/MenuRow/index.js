import React from 'react';
import {Text, View, Image, Switch} from 'react-native';
import strings from '../../constants/strings';
import styles from './styles';
import Theme from '../../theme';

const MenuRow = ({
  title = '',
  subTitle = '',
  icon,
  toggle,
  toggleValue,
  onToggle,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      {toggle && (
        <Switch
          value={toggleValue}
          onValueChange={onToggle}
          trackColor={{
            false: Theme.Colors.switchDisabled,
            true: Theme.Colors.primary,
          }}
          thumbColor={Theme.Colors.white}
        />
      )}
    </View>
  );
};

export default MenuRow;
