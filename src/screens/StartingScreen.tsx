import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { HeaderInfo } from '../components/HeaderInfo';
import { colors } from '../theme/appTheme';

export const StartingScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <HeaderInfo img="https://img.clasf.co/2017/12/21/Domiciliario-con-moto-Medelln-20171221175235.jpg" name="Juan Perez" color={colors.barbecueDark} />
      <View style={{ backgroundColor: 'orange', height: '70%' }}>
        <Text>Estoy en la pantalla de inicio</Text>
      </View>
    </View>
  );
};
