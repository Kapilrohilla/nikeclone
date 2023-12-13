import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import AuthTopBar from '../../components/AuthTopBar';

export default function PreviousAccountLogin() {
  const email = 'kapilrohilla2002@gmail.com';
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <AuthTopBar />
      <View style={{paddingHorizontal: 36}}>
        <Image
          source={require('../../assets/logo_dark.png')}
          //   height={20}
          //   width={40}
          style={styles.logo}
        />
        <Image
          style={styles.user}
          source={require('../../assets/userJohnSmit.png')}
        />
        <Text style={styles.intro}>Would you like to continue as John</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={{color: '#767676', lineHeight: 18}}>
          By continuing, I agree to Nike
          <Text style={{textDecorationLine: 'underline'}}>
            Privacy Policy
          </Text>{' '}
          and
          <Text style={{textDecorationLine: 'underline'}}>Term of Use</Text>
        </Text>

        <Pressable style={styles.createAccountBtn}>
          <Text style={{color: '#fff'}}>Create Account</Text>
        </Pressable>
        <Text
          style={{
            textAlign: 'center',
            textDecorationLine: 'underline',
            color: '#767676',
          }}>
          No, use another account
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  createAccountBtn: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 100,
  },
  intro: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
    marginBottom: 18,
  },
  email: {
    fontSize: 16,
    fontWeight: '400',
    color: '#767676',
    marginBottom: 57,
  },
  logo: {
    width: 50,
    height: 18,
    marginTop: 20,
    marginBottom: 40,
  },
  user: {
    height: 100,
    width: 100,
    borderRadius: 1000,
    marginBottom: 28,
  },
});
