import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';

type NewArrivalsProps = {
  imageurl: string;
  name: string;
  price: number;
  navigation: any;
};
export default function NewArrivalsCard({imageurl, name, price, navigation}: NewArrivalsProps) {
  return (
    <Pressable onPress={() => navigation.push('collection')}>
      <View style={{gap: 5, marginHorizontal: 10}}>
        <Image source={{uri: imageurl}} height={250} width={350} resizeMode={'contain'} />
        <Text style={styles.name}>{name}</Text>
        <Text style={{color: '#767676', fontWeight: '600'}}>INR {price}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  name: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
    textTransform: 'capitalize',
  },
});
