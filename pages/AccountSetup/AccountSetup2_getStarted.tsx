import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type getStartedProps = {
  title: string;
  handleGetStarted: () => void;
};
export default function AccountSetup2_getStarted(props: getStartedProps) {
  return (
    <>
      <View style={{marginVertical: 20}}>
        <Text style={{fontSize: 32, fontWeight: '500', lineHeight: 38}}>{props.title}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 60}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 80,
            height: 51,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 9999,
          }}>
          <Text style={{color: '#000', fontWeight: '500', fontSize: 15}}> Get Started</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
