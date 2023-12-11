import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AuthTopBar from '../../components/AuthTopBar';

export default function Email() {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.emailContainer}>
      <AuthTopBar />
      <View style={styles.contentContainer}>
        {/* TODO Logo need to replace with dark logo */}
        <Image
          source={require('../../assets/logo.png')}
          height={18}
          resizeMode={'center'}
          style={styles.logo}
        />
        <Text style={styles.intro}>
          Enter your Email to join us or sing in.
        </Text>
        <View style={styles.chooseCountry}>
          <Text style={[styles.countryName]}>United States</Text>
          <Text style={[styles.changeCountry, styles.color, styles.underLine]}>
            change
          </Text>
        </View>
        <TextInput
          value={email}
          onChangeText={newText => setEmail(newText)}
          placeholder="Email"
          style={styles.emailInput}
        />
        <View>
          <Text style={[styles.color, styles.fontStyling]}>
            By continuing, I agree to Nike’s
          </Text>
          <Text style={[styles.color, styles.fontStyling]}>
            <Text style={styles.underLine}>Privacy Policy </Text> and
            <Text style={styles.underLine}> Term of use</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.nextBtn}>
        <Text style={{color: 'white'}}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  nextBtn: {
    backgroundColor: '#000',
    marginHorizontal: 26,
    top: 100,
    paddingVertical: 16,
    paddingHorizontal: 51,
    borderRadius: 30,
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  color: {
    color: 'black',
  },
  emailContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 26,
  },
  logo: {
    marginVertical: 20,
  },
  intro: {
    fontSize: 28,
    fontWeight: '400',
    color: 'black',
  },
  chooseCountry: {
    flexDirection: 'row',
    gap: 10,
    fontSize: 16,
    marginTop: 22,
    // marginBottom: 42,
  },
  countryName: {
    color: '#767676',
  },
  changeCountry: {
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  emailInput: {
    borderColor: '#000',
    borderWidth: 1,
    height: 54,
    paddingVertical: 15,
    borderRadius: 6,
    marginVertical: 40,
    color: '#767676',
    paddingHorizontal: 10,
    letterSpacing: -0.4,
  },
  fontStyling: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: -0.4,
    color: '#767676',
    // lineHeight: 100,
    alignSelf: 'stretch',
  },
  underLine: {
    textDecorationLine: 'underline',
  },
});
