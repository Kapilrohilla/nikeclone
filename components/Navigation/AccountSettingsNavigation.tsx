import React from 'react';
import AccountSetupSplash from '../../pages/Splash/AccountSetupSplash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountSetupContainer from '../../pages/AccountSetup/AccountSetupContainer';

export default function AccountSettings() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="setupSplash" screenOptions={{headerShown: false}}>
      <Stack.Screen name="setupSplash" component={AccountSetupSplash} />
      {/* <Stack.Screen name="setup2_gender" component={AccountSetup2} /> */}
      {/* <Stack.Screen name="setup2_gender" component={AccountSetupContainer} /> */}
      <Stack.Screen name="setupStart" component={AccountSetupContainer} />
    </Stack.Navigator>
  );
  // return <AccountSetupSplash />;
}
