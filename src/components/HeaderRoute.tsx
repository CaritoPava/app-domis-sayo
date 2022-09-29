import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../theme/appTheme';

interface Props {
  img: string;
  name: string;
  color: string;
}

export const HeaderRoute = ({ img, name, color }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.text}>- domis -</Text>
      </View>
      <View style={{ ...styles.containerInfo, backgroundColor: color }}>
        <View >
          <Image source={{ uri: img }} style={styles.imgDomi} />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    posicion: 'absolute',
    backgroundColor: colors.barbecue,
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',

  },
  containerTitle: {
    color: 'white',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInfo: {
    backgroundColor: colors.barbecueDark,
    flex: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 25,
  },

  imgDomi: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

});
