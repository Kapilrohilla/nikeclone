import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './components/Navigation/BottomNavigator';
import AuthNavigation from './components/Navigation/AuthNavigation';
import HomeSplash from './pages/Splash/HomeSplash';
import AccountSettings from './components/Navigation/AccountSettingsNavigation';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'HomeSplash'} screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeSplash" component={HomeSplash} />
          <Stack.Screen name="Auth" component={AuthNavigation} />
          <Stack.Screen name="AccountSetting" component={AccountSettings} />
          <Stack.Screen name="Root" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
