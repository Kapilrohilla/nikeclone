import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';

export default function AccountSetupSplash({navigation}: {navigation: any}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('setupStart');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Image
          height={20}
          width={50}
          resizeMode="contain"
          source={require('../../assets/logo.png')}
        />
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#fff',
            marginTop: 20,
          }}>
          Hi John, Welcome to Nike. Thanks for becoming a Member!
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
