import {View, StyleSheet, Image} from 'react-native';
import React, {NamedExoticComponent, useEffect} from 'react';
// type navigation: any

export default function HomeSplash({navigation}: any) {
  const image = require('../../assets/logo.png');

  const navigateToHomeAfter3seconds = () => {
    setTimeout(() => {
      navigation.navigate('LoginSignupHome');
    }, 3000);
  };

  useEffect(navigateToHomeAfter3seconds, []);

  return (
    <View style={styles.container}>
      <Image
        source={image}
        height={47}
        width={132}
        alt=""
        resizeMode="contain"
      />
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
