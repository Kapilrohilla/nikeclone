import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';

export default function Products() {
  const width = Dimensions.get('screen').width / 2 - 5;
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <View style={[styles.container, {width: width}]}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../assets/product.png')}
          style={{maxWidth: width - 10}}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={{position: 'absolute', right: 20, top: 10}}
          onPress={() => setIsFavourite(!isFavourite)}>
          <Icon name={isFavourite ? 'favorite' : 'favorite-outline'} color={'#767676'} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.detailContainer}>
        <Text style={[styles.title]}>Cosmic Unity 3 NZ</Text>
        <Text style={[styles.description]}>Basketball Shoes</Text>
        <Text style={[styles.description]}>1 Colors</Text>
        <Text style={[styles.price]}>INR 300</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 10,
    gap: 10,
  },
  detailContainer: {
    paddingHorizontal: 14,
    gap: 3,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#767676',
    fontWeight: '400',
  },
});
