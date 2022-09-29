import React from 'react';
import { View } from 'react-native';
import { Dropdown } from '../components/Dropdown';
import { HeaderInfo } from '../components/HeaderInfo';
import { colors } from '../theme/appTheme';

export const StartingScreen = () => {
  const listRender = [
    { label: 'Circunvalar', value: 'Circunvalar' },
    { label: 'Arboleda', value: 'Arboleda' },
    { label: 'Pereira Plaza', value: 'Pereira Plaza' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <HeaderInfo img="https://img.clasf.co/2017/12/21/Domiciliario-con-moto-Medelln-20171221175235.jpg" name="Juan Perez" color={colors.barbecueDark} />
      <View style={{ justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <Dropdown listRender={listRender} />
        </View>
      </View>
    </View>
  );
};
