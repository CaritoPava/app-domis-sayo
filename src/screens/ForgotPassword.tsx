import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, Text, TextInput, View, TouchableNativeFeedback, StyleSheet, Alert } from 'react-native';
import { useForm } from '../hooks/useForm';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { ButtonRed } from '../components/ButtonRed';



interface Props extends StackScreenProps<any, any> { }

export const ForgotPassword = ({ navigation }: Props) => {

  const { identificationNumber, onChange } = useForm({
    identificationNumber: '',
  });

  const handleForgotPassword = () => {
    console.log(identificationNumber);
    Alert.alert(
      'Contraseña enviada',
      'La contraseña ha sido enviada a su correo electronico', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login'),
        style: 'default',
      },
    ]
    );

  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar backgroundColor="#F5F5F5" barStyle="light-content" />
      <ScrollView>

        <View style={registerStyles.registerContainer}>

          <View style={registerStyles.registerContainerLogo}>
            <Text
              style={registerStyles.title}
            >
              Olvidaste tu contraseña
            </Text>

          </View>

          <View style={registerStyles.registerContainerInputs} >
            <Text style={registerStyles.textLabel}>Nombre</Text>
            <TextInput
              value={identificationNumber}
              autoCorrect={false}
              onChangeText={(value) => onChange(value, 'identificationNumber')}
              autoCapitalize="none"
              style={styles.inputs}
              keyboardType="numeric"
            />
          </View>
          <View style={registerStyles.registerContainerButtons}>
            <ButtonRed
              text="Recuperar contraseña"
              color="#7a1520"
              onPress={() => handleForgotPassword()}
            />
          </View>
        </View>

        <View style={registerStyles.registerContainerBackToLogin}>
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('Login')}
            style={registerStyles.buttonLogin}
          >
            <View style={registerStyles.registerContainerLogin}>
              <Text style={{ ...registerStyles.text, color: 'black' }}>Ya tienes una cuenta?</Text>
              <Text style={{ ...registerStyles.text, color: 'orange', marginLeft: 10 }}>Inicia Sesión</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const registerStyles = StyleSheet.create({
  registerContainer: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 25,
  },
  registerContainerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 100,
  },
  registerContainerInputs: {
    flex: 3,
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: 30,
  },
  registerContainerButtons: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  registerContainerLogin: {
    flexDirection: 'row',
    height: 30,
    width: 250,
    alignItems: 'center',
    marginBottom: 50,
  },
  registerContainerBackToLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogin: {
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
  text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 15,
    marginTop: 0,
    paddingTop: 0,
  },
  textLabel: {
    marginHorizontal: 10,
    marginBottom: 8,
  },
});
