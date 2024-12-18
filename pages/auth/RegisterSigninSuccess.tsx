import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import AuthTopBar from '../../components/AuthTopBar';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {CommonActions} from '@react-navigation/native';

export default function RegisterSigninSuccess({navigation, route}: any) {
  const [isChecked, setIsChecked] = useState(false);
  console.log(route.params?.goto);
  const isNewAccount = route.params?.goto;
  const navigateNext = () => {
    if (isNewAccount === 'accountSetup') {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'AccountSetting'}],
        }),
      );
    } else {
      navigation.navigate('Root');
    }
  };
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <AuthTopBar backBtn={false} />
      <View style={{paddingHorizontal: 36}}>
        <Image source={require('../../assets/logo_dark.png')} style={styles.logo} />
        <Text style={styles.intro}>You have been signed in successfully.</Text>
      </View>
      <View style={{paddingHorizontal: 36}}>
        <BouncyCheckbox
          text="Don't show me again"
          style={{marginVertical: 42}}
          isChecked={isChecked}
          onPress={(isChecked: boolean) => {
            setIsChecked(isChecked);
          }}
        />
        <Pressable style={styles.createAccountBtn} onPress={navigateNext}>
          <Text style={{color: '#fff'}}>Continue</Text>
        </Pressable>
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
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 100,
  },
  logo: {
    width: 50,
    height: 18,
    marginTop: 20,
    marginBottom: 40,
  },
  intro: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
    marginBottom: 18,
  },
});
