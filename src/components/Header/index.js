import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import strings from '../../constants/strings';
import styles from './styles';
import {aspire, backIcon} from '../../assets/images';
import Theme from '../../theme';

const Header = ({
  showBalance = false,
  title = '',
  back = false,
  balance = '3,000',
}) => {
  return (
    <View style={styles.root}>
      {back && (
        <Pressable style={styles.back}>
          <Image
            source={backIcon}
            style={styles.backIcon}
            tintColor={Theme.Colors.white}
          />
        </Pressable>
      )}
      <Image source={aspire} style={styles.logo} />
      <View style={[styles.container, showBalance && styles.lessPadding]}>
        <Text style={styles.title}>{title}</Text>

        {showBalance && (
          <View>
            <Text style={styles.availableBalance}>
              {strings.availableBalance}
            </Text>
            <View style={styles.balanceContainer}>
              <View style={styles.sdollarContainer}>
                <Text style={styles.sdollar}>{strings.sdollar}</Text>
              </View>
              <Text style={styles.amount}>{balance}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Header;
