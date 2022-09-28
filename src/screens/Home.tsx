import React from 'react';
import { StatusBar, View } from 'react-native';
import { TabNavigator } from '../navigator/TabNavigator';


export const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <TabNavigator />
    </View>

  );
};
