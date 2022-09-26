import { StyleSheet } from 'react-native';

export const colors = {
  rojoSayonara: '#d62a2d',
  barbecue: '#7a1520',
  naranja: '#e94e1b',
  naranjaClaro: '#ec671a',
  amarillo: '#FDC533',
  azulBrillante: '#63c3d1',
  menta: '#88cccc',
  green: 'green',
};

export const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: colors.barbecue,
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  inputs: {
    backgroundColor: 'white',
    width: 350,
    height: 40,
    borderRadius: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
