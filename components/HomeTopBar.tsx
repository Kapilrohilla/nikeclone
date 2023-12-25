import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
type HomeTopBarProps = {
  title: String | null;
  search: boolean;
  // navigation: any;
};

export default function HomeTopBar({title, search}: HomeTopBarProps) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        flexDirection: 'row',
      }}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-ios-new" color="#000" size={21} />
      </Pressable>
      {title !== null && (
        <Text style={{color: '#000', fontWeight: '600', fontSize: 18}}>{title}</Text>
      )}
      <View style={{flexDirection: 'row', gap: 10}}>
        {search && (
          <>
            <Icon name="tune" color="#000" size={21} />
            <Icon name="search" color="#000" size={21} />
          </>
        )}
      </View>
    </View>
  );
}
