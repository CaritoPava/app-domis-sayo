import React from 'react';
import { Text, TouchableNativeFeedback, View, StyleSheet } from 'react-native';

interface Props {
  text: string;
  color: string;
  onPress: () => void;
}

export const ButtonRed = ({ text, color, onPress }: Props) => {
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(color, false, 350)}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: 350,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },

});
