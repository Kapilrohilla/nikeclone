import {View, Text, ScrollView, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import HomeTopBar from '../../components/HomeTopBar';
import Products from '../../components/Products';
// import {useNavigation} from '@react-navigation/native';

const categories: string[] = [
  'All',
  'Tops & T-Shirts',
  'Hoodies',
  'Slepper',
  'Smartphone',
  'Laptop',
];
export default function Collections() {
  // const navigation = useNavigation();
  const [activeNavigation, setActiveNavigation] = useState(categories[0]);

  function active(category: string) {
    if (category === activeNavigation) {
      return [styles.navigationBtn, styles.activeNavigation];
    } else {
      return [styles.navigationBtn];
    }
  }
  return (
    <View>
      <HomeTopBar search={true} title={'Kapil Collection'} />
      <ScrollView horizontal={true}>
        <View style={styles.navigationMenuContainer}>
          {categories.map((category, index) => (
            <Pressable
              key={index}
              style={active(category)}
              onPress={() => setActiveNavigation(category)}>
              <Text style={[styles.textcenter]}>{category}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              paddingBottom: 100,
            }}>
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationMenuContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  navigationBtn: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    // borderWidth: 2,
  },
  textcenter: {
    fontSize: 16,
    color: '#767676',
  },
  activeNavigation: {
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  activeBtn: {
    color: '#000',
  },
});
