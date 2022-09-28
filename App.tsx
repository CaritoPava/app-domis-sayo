import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackNavigatorLogin } from './src/navigator/StackNavigatorLogin';




const App = () => {
  return (
    <NavigationContainer>
      <StackNavigatorLogin />
    </NavigationContainer>
  );
};

export default App;
