import {View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AccountSetup2_getStarted from './AccountSetup2_getStarted';

export default function AccountSetupContainer() {
  const screenWidth = Dimensions.get('screen').width;
  const totalScrollerWdith = screenWidth - 100;
  const [page, setPage] = useState(1);
  const title = [
    "To personalize your  experience and connect you to sport, we've got a few questions for you.",
  ];
  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <ImageBackground
        source={require('../../assets/discover2.png')}
        style={{flex: 1}}
        resizeMode="cover">
        <ImageBackground
          source={require('../../assets/overlay.png')}
          resizeMode="cover"
          imageStyle={{
            tintColor: '#000',
          }}
          style={{flex: 1}}>
          {/* sliderStartHere */}
          <View style={{marginVertical: 20, height: 8, width: screenWidth, flexDirection: 'row'}}>
            <View style={[styles.sliderContainer]}>
              <View
                style={{
                  height: '100%',
                  backgroundColor: '#fff',
                  width: (totalScrollerWdith / 9) * page,
                  borderRadius: 99,
                }}></View>
            </View>
          </View>
          {/* sliderEndsHere*/}
          {page === 1 && (
            <AccountSetup2_getStarted title={title[0]} handleGetStarted={() => setPage(2)} />
          )}
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    marginHorizontal: 50,
    height: 8,
    flex: 1,
    backgroundColor: '#767676',
    overflow: 'hidden',
    borderRadius: 99,
  },
});
