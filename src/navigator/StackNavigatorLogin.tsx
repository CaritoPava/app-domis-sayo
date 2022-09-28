import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { ForgotPassword } from '../screens/ForgotPassword';
import { ChangePassword } from '../screens/ChangePassword';
import { Home } from '../screens/Home';


const Stack = createStackNavigator();

export const StackNavigatorLogin = () => {
  return (
    <Stack.Navigator
      //ocultar el header
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
