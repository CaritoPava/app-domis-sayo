import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/appTheme';


export const BarDomi = () => {
  return (
    <View style={styles.containerTitle}>
      <Text style={styles.text}>- domis -</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.barbecue,
    height: 40,
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 25,
  },
});
