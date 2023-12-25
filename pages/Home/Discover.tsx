import {View, Text, StyleSheet, Image, ScrollView, Pressable, FlatList} from 'react-native';
import React from 'react';
import NewArrivalsCard from '../../components/NewArrivalsCard';
import HomeTopBar from '../../components/HomeTopBar';

export default function Discover({navigation}: any) {
  const today =
    new Date().toLocaleDateString('en-US', {weekday: 'long'}) +
    ', ' +
    new Date().getDay() +
    ' ' +
    new Date().toLocaleDateString('en-US', {month: 'short'});
  const newArrivalDetails = [
    {
      id: '1',
      imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
      price: 199,
      name: 'Air Jordan XXJ',
    },
    {
      id: '2',
      imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
      price: 199,
      name: 'Air Jordan XXJ',
    },
    {
      id: '3',
      imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
      price: 199,
      name: 'Air Jordan XXJ',
    },
    {
      id: '4',
      imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
      price: 199,
      name: 'Air Jordan XXJ',
    },
  ];
  return (
    <ScrollView>
      <View style={{marginVertical: 30, paddingHorizontal: 20}}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.date}>{today}</Text>
      </View>
      <Pressable onPress={() => navigation.push('blog')}>
        <Image
          source={require('../../assets/discover2.png')}
          style={styles.mainImage}
          resizeMode="contain"
        />
      </Pressable>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 15,
        }}>
        <Text style={[styles.color, {fontWeight: '600', marginBottom: 10, paddingLeft: 3}]}>
          What's new
        </Text>
        <Text style={[styles.date, {fontSize: 20, fontWeight: '600'}]}>
          The latest arrivals from Nike
        </Text>
        <View>
          <View style={{gap: 20, flexDirection: 'row'}}>
            <FlatList
              horizontal={true}
              data={newArrivalDetails}
              renderItem={({item}) => (
                <NewArrivalsCard
                  name={item.name}
                  imageurl={item.imageUrl}
                  price={item.price}
                  navigation={navigation}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  color: {color: '#000'},
  mainImage: {
    flex: 1,
    // height: 'auto',
    // width: 'auto',
  },
  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: '700',
  },
  date: {
    color: '#767676',
    fontWeight: '500',
  },
});
