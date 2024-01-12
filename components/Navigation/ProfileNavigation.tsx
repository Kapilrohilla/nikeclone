import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {Toast, ToastDescription, ToastTitle, VStack, useToast} from '@gluestack-ui/themed';

export default function ProfileNavigation() {
  const navigation = useNavigation();
  const toast = useToast();

  const handleLogout = () => {
    AsyncStorage.clear().then(() => {
      console.log('storage cleaned');
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'HomeSplash'}],
          }),
        );
      }, 2000);
      toast.show({
        placement: 'bottom',
        duration: 2000,
        render: ({id}) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action="attention" variant="accent">
              <VStack space="xs">
                <ToastTitle>Logout Successfully</ToastTitle>
              </VStack>
            </Toast>
          );
        },
      });
    });
  };
  return (
    <View>
      <Text style={{color: 'black'}}>ProfileNavigation</Text>
      <Button title={'Logout'} onPress={handleLogout} />
    </View>
  );
}
