import React, {useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import styles from './styles';
import strings from '../../constants/strings';
import Theme from '../../theme';
import {aspire, visaLogo, eye} from '../../assets/images';

const DebitCard = ({
  user_name = 'Mark Henry',
  card_number = '5647341124132020',
  expiry_date = '12/20',
  cvv = '456',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View>
      <Pressable
        onPress={() => {
          setIsVisible(visible => !visible);
        }}
        style={styles.visibilityContainer}>
        <Image
          source={eye}
          tintColor={Theme.Colors.primary}
          style={styles.eyeIcon}
        />
        <Text style={styles.hideCardNumber}>
          {isVisible ? strings.hideCardNumber : strings.showCardNumber}
        </Text>
      </Pressable>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Image
            source={aspire}
            tintColor={Theme.Colors.white}
            style={styles.logo}
          />
          <Text style={styles.aspireText}>{strings.aspire}</Text>
        </View>
        <Text style={styles.userName}>{user_name}</Text>
        <View style={styles.cardNumberContainer}>
          {(
            (isVisible && card_number) ||
            new Array(16).fill(strings.hiddenChar).join('')
          )
            .match(/.{1,4}/g)
            .map(number => (
              <Text style={styles.cardNumber}>{number}</Text>
            ))}
        </View>

        <View style={styles.cardFooterRow}>
          <View style={styles.dateRow}>
            <Text style={styles.labelText}>{strings.thru}:</Text>
            <Text style={styles.dateText}> {expiry_date}</Text>
          </View>
          <View style={styles.cvvRow}>
            <Text style={styles.labelText}>{strings.cvv}:</Text>
            <Text style={styles.dateText}> {cvv}</Text>
          </View>
        </View>
        <View style={styles.cardLogoContainer}>
          <Image
            source={visaLogo}
            tintColor={Theme.Colors.white}
            style={styles.cardLogo}
          />
        </View>
      </View>
    </View>
  );
};

export default DebitCard;
