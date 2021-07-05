import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';

const Button = ({title = '', style, onPress}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
