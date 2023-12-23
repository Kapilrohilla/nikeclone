import React from 'react';
import HomeSplash from './pages/Splash/HomeSplash';
import LoginSignupHome from './pages/auth/LoginSignupHome';
import Email from './pages/auth/Email';
import SignupForm from './pages/auth/SignupForm';
import AccountSetupSplash from './pages/Splash/AccountSetupSplash';

import {GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeSplash" screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeSplash" component={HomeSplash} />
          <Stack.Screen name="LoginSignupHome" component={LoginSignupHome} />
          <Stack.Screen name="email" component={Email} />
          <Stack.Screen name="signupform" component={SignupForm} />
          <Stack.Screen name="AccountSetupSplash" component={AccountSetupSplash} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Text>Hello World!</Text> */}
    </GluestackUIProvider>
  );
  // return <HomeSplash />;
  // return <LoginSignupHome />;
  // return <Email />;
  // return <SignupForm />;
  // return <AccountSetupSplash />;
}
