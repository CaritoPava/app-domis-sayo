import React from 'react';
import { Text, View, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hooks/useForm';
import { ButtonRed } from '../components/ButtonRed';

interface Props extends StackScreenProps<any, any> { }

export const Register = ({ navigation }: Props) => {

  const { name, lastName, email, password, onChange } = useForm({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar backgroundColor="#F5F5F5" barStyle="light-content" />
      <ScrollView>

        <View style={registerStyles.registerContainer}>

          <View style={registerStyles.registerContainerLogo}>
            <Text
              style={{ ...styles.text, fontSize: 60 }}
            >
              SAYONARA
            </Text>
            <Text
              style={{ ...styles.text, fontSize: 40, color: '#FFAA00' }}
            >
              -  domis  -
            </Text>
          </View>

          <View style={registerStyles.registerContainerInputs} >
            <Text style={registerStyles.textLabel}>Nombre</Text>
            <TextInput
              value={name}
              autoCorrect={false}
              onChangeText={(value) => onChange(value, 'name')}
              autoCapitalize="none"
              style={styles.inputs}
            />
            <Text style={registerStyles.textLabel}>Apellido</Text>
            <TextInput
              value={lastName}
              autoCorrect={false}
              onChangeText={(value) => onChange(value, 'lastName')}
              autoCapitalize="none"
              style={styles.inputs}
            />
            <Text style={registerStyles.textLabel}>Correo electronico</Text>
            <TextInput
              value={email}
              autoCorrect={false}
              onChangeText={(value) => onChange(value, 'email')}
              autoCapitalize="none"
              style={styles.inputs}
              keyboardType="email-address"
            />
            <Text style={registerStyles.textLabel}>Contraseña</Text>
            <TextInput
              value={password}
              autoCorrect={false}
              onChangeText={(value) => onChange(value, 'password')}
              autoCapitalize="none"
              style={styles.inputs}
              keyboardType="visible-password"
            />
          </View>
          <View style={registerStyles.registerContainerButtons}>
            <ButtonRed
              text="Crear cuenta"
              color="#7a1520"
              onPress={() => console.log('Iniciar Sesión')}
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
  registerContainerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
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
