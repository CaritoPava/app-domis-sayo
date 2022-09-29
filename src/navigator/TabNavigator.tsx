import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StartingScreen } from '../screens/StartingScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';




const Tab = createMaterialBottomTabNavigator();


export const TabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: 'white' }}
      activeColor={colors.barbecue}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'StartingScreen':
              iconName = 'home';
              break;
            case 'HistoryScreen':
              iconName = 'calendar-outline';
              break;
            case 'ProfileScreen':
              iconName = 'person-circle-sharp';
              break;
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
        headerShown: false,
      })}
    >


      <Tab.Screen name="StartingScreen" options={{ title: 'Inicio' }} component={StartingScreen} />
      <Tab.Screen name="HistoryScreen" options={{ title: 'Historial' }} component={HistoryScreen} />
      <Tab.Screen name="ProfileScreen" options={{ title: 'Mi Perfil' }} component={ProfileScreen} />
    </Tab.Navigator>
  );
};
