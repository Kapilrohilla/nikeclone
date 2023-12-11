import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
export default function HomeSplash() {
  const image = require('../../assets/logo.png');
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
