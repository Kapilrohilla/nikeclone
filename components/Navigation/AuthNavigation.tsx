import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginSignupHome from '../../pages/auth/LoginSignupHome';
import Email from '../../pages/auth/Email';
import SignupForm from '../../pages/auth/SignupForm';
import AccountSetupSplash from '../../pages/Splash/AccountSetupSplash';
import Password from '../../pages/auth/Password';
import RegisterSigninSuccess from '../../pages/auth/RegisterSigninSuccess';
import {SignupContextProvider} from '../../contexts/signupContext';

export default function AuthNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <SignupContextProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="loginSignupHome" component={LoginSignupHome} />
        <Stack.Screen name="email" component={Email} />
        <Stack.Screen name="signupform" component={SignupForm} />
        <Stack.Screen name="accountSetupSplash" component={AccountSetupSplash} />
        <Stack.Screen name="password" component={Password} />
        <Stack.Screen name="registerSigninSuccess" component={RegisterSigninSuccess} />
      </Stack.Navigator>
    </SignupContextProvider>
  );
}
