import {View, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// type navigation: any

export default function HomeSplash({navigation}: any) {
  const [isLogin, setIslogin] = useState(false);
  const image = require('../../assets/logo.png');

  const extractToken = async () => {
    const user = await AsyncStorage.getItem('user');
    console.log(user);
    if (user) {
      setIslogin(true);
    }
  };

  useEffect(() => {
    extractToken();
    const timer = setTimeout(() => {
      navigation.replace(isLogin ? 'Root' : 'Auth');
    }, 3000);
    return () => clearTimeout(timer);
  }, [isLogin]);

  return (
    <View style={styles.container}>
      <Image source={image} height={47} width={132} alt="" resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    flex: 1,
  },
});
