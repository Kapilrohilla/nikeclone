import {View, Text, TouchableOpacity, Image} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, {useState} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
type AccountSettingCheckBoxCardProps = {
  title: string;
  bottomBorder: boolean;
  setState: any;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  state: boolean;
  page: number;
};

const imageMap = new Map();
imageMap.set('Mens', require('../assets/men.png'));
imageMap.set('Women', require('../assets/women.png'));
imageMap.set('Boys', require('../assets/boys.png'));
imageMap.set('Girls', require('../assets/girls.png'));
// imageMap.set('Womens', require('../assets/women.png'));
export default function AccountSettingCheckBoxCard(props: AccountSettingCheckBoxCardProps) {
  let containerCss: StyleProp<ViewStyle> = {
    paddingVertical: 25,
    height: 25 + 68,
    borderBottomWidth: props.bottomBorder ? 1 : 0,
    borderColor: '#57595B',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };
  const handleClicked = () => {
    props.setState(!props.state);
    props.setPage(props.page + 1);
  };
  return (
    <TouchableOpacity onPress={handleClicked}>
      <View style={containerCss}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Image
            source={imageMap.get(props.title)}
            style={{height: 68, width: 68, borderRadius: 999}}
          />
          <Text style={{fontSize: 24, color: props.state ? '#fff' : '#767676', fontWeight: '500'}}>
            {props.title}
          </Text>
        </View>
        <BouncyCheckbox
          size={25}
          fillColor="black"
          unfillColor="black"
          iconStyle={{borderColor: 'white'}}
          innerIconStyle={{borderWidth: 2, borderColor: '#57595B'}}
          isChecked={props.state}
          onPress={(isChecked: boolean) => {
            props.setState(isChecked);
          }}
          //   disabled
        />
      </View>
    </TouchableOpacity>
  );
}
