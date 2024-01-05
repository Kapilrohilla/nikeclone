import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Touchable,
} from 'react-native';
import React, {useState} from 'react';
import AccountSetup2_getStarted from './AccountSetup2_getStarted';
import AccountSettingCheckBoxCard from '../../components/AccountSettingCheckBoxCard';
import {ScrollView} from '@gluestack-ui/themed';

export default function AccountSetupContainer() {
  const screenWidth = Dimensions.get('screen').width;
  // const [selectedGender, setSelectedGender] = useState(null);
  const totalScrollerWdith = screenWidth - 100;
  const [page, setPage] = useState(1);
  const title = [
    "To personalize your  experience and connect you to sport, we've got a few questions for you.",
    'First up, which product do you use the most?',
    'What sports, brands and collections are you interested in?',
    'Stay in the know with the notifications about First Access to product, invites to experiences, personalized orffers, and order updated.',
    'Want to sue Location Services to help you find the closest Nike Store, access in-store and location-based features, and see experiences near you?',
    "Congrulats! You're now part of a growing community of Nike Members helping to build the future of sport. Together.",
  ];

  let backgroundDarkenCss;
  if (page !== 1) {
    backgroundDarkenCss = {
      flex: 1,
      backgroundColor: '#000000dd',
    };
  } else {
    backgroundDarkenCss = {
      flex: 1,
    };
  }

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
          style={backgroundDarkenCss}>
          {/* sliderStartHere */}
          <View style={{marginVertical: 20, height: 8, width: screenWidth, flexDirection: 'row'}}>
            <View style={[styles.sliderContainer]}>
              <View
                style={{
                  height: '100%',
                  backgroundColor: '#fff',
                  width: (totalScrollerWdith / 6) * page,
                  borderRadius: 99,
                }}></View>
            </View>
          </View>
          {/* sliderEndsHere*/}
          <View style={{marginVertical: 20}}>
            <Text style={{fontSize: 32, fontWeight: '500', lineHeight: 38, paddingHorizontal: 10}}>
              {title[page - 1]}
            </Text>
          </View>
          {/* page 0 = splash screen  */}
          {page === 1 && (
            <AccountSetup2_getStarted title={title[0]} handleGetStarted={() => setPage(2)} />
          )}
          {/* page 2 */}
          {page === 2 && (
            <View style={{paddingHorizontal: 10, paddingVertical: 50}}>
              <AccountSettingCheckBoxCard
                bottomBorder={true}
                title="Mens"
                state={false}
                setState={(state: boolean) => 'newState'}
                setPage={setPage}
                page={page}
              />
              <AccountSettingCheckBoxCard
                bottomBorder={false}
                title="Women"
                state={false}
                setState={(state: boolean) => 'newState'}
                setPage={setPage}
                page={page}
              />
              {/* <AccountSettingCheckBoxCard bottomBorder={true} title="Mens" /> */}
              <Text style={{fontSize: 32, fontWeight: '500', marginTop: 30}}>Any others?</Text>
              <AccountSettingCheckBoxCard
                bottomBorder={true}
                title="Boys"
                state={false}
                page={page}
                setState={(state: boolean) => 'newState'}
                setPage={setPage}
              />
              <AccountSettingCheckBoxCard
                bottomBorder={false}
                title="Girls"
                state={false}
                page={page}
                setState={(state: boolean) => 'newState'}
                setPage={setPage}
              />
            </View>
          )}
          {page === 3 && (
            <ScrollView style={{paddingHorizontal: 10, paddingVertical: 50}}>
              {['Running', 'Lifestyle', 'Basketball', 'Soccer', 'Jordan', 'Nike By You'].map(
                card => (
                  <AccountSettingCheckBoxCard
                    bottomBorder={false}
                    title={card}
                    state={false}
                    setState={(state: boolean) => 'newState'}
                    setPage={setPage}
                    page={page}
                  />
                ),
              )}
            </ScrollView>
          )}
          {page === 4 && (
            <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 60}}>
              <TouchableOpacity
                onPress={() => setPage(5)}
                style={{
                  backgroundColor: '#fff',
                  marginHorizontal: 80,
                  height: 51,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 9999,
                }}>
                <Text style={{color: '#000', fontWeight: '500', fontSize: 15}}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
          {page === 5 && (
            <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 60}}>
              <TouchableOpacity
                onPress={() => setPage(6)}
                style={{
                  backgroundColor: '#fff',
                  marginHorizontal: 80,
                  height: 51,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 9999,
                }}>
                <Text style={{color: '#000', fontWeight: '500', fontSize: 15}}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
          {page === 6 && (
            <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 60}}>
              <TouchableOpacity
                onPress={() => setPage(7)}
                style={{
                  backgroundColor: '#fff',
                  marginHorizontal: 80,
                  height: 51,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 9999,
                }}>
                <Text style={{color: '#000', fontWeight: '500', fontSize: 15}}>Next</Text>
              </TouchableOpacity>
            </View>
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
