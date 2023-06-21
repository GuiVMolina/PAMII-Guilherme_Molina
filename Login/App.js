import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import React, { useState } from 'react';

import backgroundImage from './Imagens/Fundo.png';

export default function App() {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [buttonText, setButtonText] = useState('▶');
  const [buttonColor, setButtonColor] = useState('rgb(64, 8, 128)');

  const handleLoginSuccess = () => {
    Linking.openURL('https://example.com/login-success');
  };

  const handleForgotPasswordPress = () => {
    Linking.openURL('https://example.com/forgot-password');
  };

  const handleNewAccount = () => {
    Linking.openURL('https://example.com/new-account');
  };

  const handleButtonPressIn = () => {
    setButtonColor('rgb(32, 4, 64)');
  };

  const handleButtonPressOut = () => {
    setButtonColor('rgb(64, 8, 128)');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.square} />
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <StatusBar style="auto" />
          <TextInput
            style={[styles.input, styles.emailInput]}
            placeholder="Email"
            value={emailField}
            onChangeText={(text) => setEmailField(text)}
          />
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            secureTextEntry
            value={passwordField}
            onChangeText={(text) => setPasswordField(text)}
          />
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: buttonColor }]}
            onPress={handleLoginSuccess}
            onPressIn={handleButtonPressIn}
            onPressOut={handleButtonPressOut}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPasswordPress}>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNewAccount}>
            <Text style={styles.newAccount}>Don't have an account yet?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  square: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
    position: 'absolute',
    width: 350,
    height: 450,
    borderRadius: 25,
    backgroundColor: 'rgba(223, 159, 255, 0.33)',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'Candara',
    fontSize: 60,
    marginTop: 40,
    marginBottom: 50,
  },
  input: {
    color: 'white',
    fontFamily: 'Candara',
    borderColor: 'rgba(255, 255, 255, 0.75)',
    borderWidth: 1,
    width: 300,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.33)',
    borderRadius: 100,
    paddingTop: 5,
    paddingLeft: 20,
  },
  emailInput: {
    marginBottom: 10,
  },
  passwordInput: {
    marginBottom: 30,
  },
  button: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: 'hidden',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: 'white',
    fontFamily: 'Candara',
    marginTop: 40,
    textDecorationLine: 'underline',
  },
  newAccount: {
    color: 'white',
    fontFamily: 'Candara',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});