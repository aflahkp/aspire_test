import React from 'react';
import {Text, View, Image, Switch} from 'react-native';
import strings from '../../constants/strings';
import styles from './styles';

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
      <Image source={icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      {toggle && <Switch value={toggleValue} onValueChange={onToggle} />}
    </View>
  );
};

export default MenuRow;
