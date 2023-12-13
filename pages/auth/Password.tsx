import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AuthTopBar from '../../components/AuthTopBar';

export default function Password() {
  const [showPassword, setShowPassword] = useState(false);
  const email = 'kapilrohilla2002@gmail.com';
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <AuthTopBar />
      <View style={{paddingHorizontal: 36}}>
        <Image
          source={require('../../assets/logo_dark.png')}
          style={styles.logo}
        />
        <Text style={styles.intro}>What is your password?</Text>
        <Text style={styles.email}>
          {email}{' '}
          <Text style={{textDecorationLine: 'underline', color: '#000'}}>
            Edit
          </Text>
        </Text>
        <Text style={styles.inputTitle}>Password :</Text>
        <View
          style={
            (styles.inputBox,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#bababa',
              paddingHorizontal: 20,
              borderRadius: 6,
            })
          }>
          <TextInput placeholder="John Doe" secureTextEntry={!showPassword} />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'visibility-off' : 'visibility'}
              size={20}
              color={'black'}
            />
          </Pressable>
        </View>
        <Text style={styles.forgot}>Forgotten your password?</Text>
        <Pressable style={styles.createAccountBtn}>
          <Text style={{color: '#fff'}}>Create Account</Text>
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
  forgot: {
    marginVertical: 42,
    textDecorationLine: 'underline',
    color: '#000',
  },
  inputTitle: {
    color: '#767676',
    fontWeight: '600',
    marginBottom: 5,
    paddingLeft: 5,
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
  intro: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
    marginBottom: 18,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#BABABA',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    color: '#000',
  },
});