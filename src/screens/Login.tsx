import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TextInput, StyleSheet, TouchableNativeFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import { ButtonRed } from '../components/ButtonRed';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';

interface Props extends StackScreenProps<any, any> { }

export const Login = ({ navigation }: Props) => {

  const { userName, password, onChange } = useForm({
    userName: '',
    password: '',
  });

  console.log(userName, password, 'data user');


  return (
    <SafeAreaView >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >

        <StatusBar backgroundColor="#7a1520" barStyle="light-content" />
        <View style={styles.loginContainer}>
          <View style={loginStyles.loginContainerLogo}>
            <Text
              style={{ ...styles.text, fontSize: 60 }}
            >
              SAYONARA
            </Text>
            <Text
              style={{ ...styles.text, fontSize: 40 }}
            >
              - domis -
            </Text>
          </View>
          <View style={loginStyles.loginContainerInputs}>
            <TextInput
              value={userName}
              autoCorrect={false}
              onChangeText={(value) => onChange(value, 'userName')}
              autoCapitalize="none"
              style={styles.inputs} placeholder="Usuario"

            />
            <TextInput
              value={password}
              autoCorrect={false}
              onChangeText={(value) => onChange(value, 'password')}
              autoCapitalize="none"
              style={styles.inputs}
              keyboardType="visible-password"
              placeholder="Contraseña" />
            <View style={loginStyles.loginContainerForgottenPassword}>
              <Text style={loginStyles.text}>Olvidaste tu contraseña?</Text>
            </View>
          </View>
          <View style={loginStyles.loginContainerButtons}>
            <ButtonRed
              text="Iniciar Sesión"
              color="#7a1520"
              onPress={() => console.log('Iniciar Sesión')}
            />
          </View>
          <View style={loginStyles.loginContainerRegister}>

            <TouchableNativeFeedback
              onPress={() => navigation.navigate('Register')}
              style={loginStyles.buttonRegister}
            >
              <View style={loginStyles.loginContainerRegister}>
                <Text style={loginStyles.text}>No tienes cuenta?</Text>
                <Text style={{ ...loginStyles.text, color: 'orange', marginLeft: 10 }}>Regístrate</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const loginStyles = StyleSheet.create({
  loginContainerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    flex: 2,
    marginTop: 130,
  },
  loginContainerInputs: {
    flex: 2,

  },
  loginContainerButtons: {
    flex: 1,
    marginBottom: 50,
    marginTop: 50,
  },
  loginContainerRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    height: 30,
    width: 250,
  },
  loginContainerForgottenPassword: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
    fontSize: 8,
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 15,
    marginTop: 0,
    paddingTop: 0,
  },
  buttonRegister: {
    color: 'yellow',
    fontFamily: 'Roboto',
    fontSize: 300,
    marginTop: 0,
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    elevation: 0,
    borderColor: 'transparent',
    height: 30,


  },

});
