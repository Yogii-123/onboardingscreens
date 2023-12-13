import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('priyadriftmark@gmail.com');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    navigation.navigate('LoginScreen');
  };

  const renderInputField = (label, value, onChangeText, placeholder, keyboardType = 'default') => {
    return (
      <>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <View style={styles.borderbox}>

      {renderInputField('Email', email, setEmail, 'Enter your email', 'email-address')}
      {renderInputField('Password', password, setPassword, 'Enter your password', 'password')}
      {renderInputField('ConfirmPassword', password, setPassword, 'Enter your Confirmpassword', 'password')}
      </View>

      <View style={styles.registerbutton}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.linkText}>Already have an account? LogIn</Text>
      </TouchableOpacity>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  borderbox:{
    width: '75%',
    borderColor:'grey',
    borderWidth: 0.5,
    padding:20,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  registerbutton:{
padding :30,
  },
  linkText: {
    color: 'blue',
    padding :30,
    textDecorationLine: 'underline',
  },


});

export default RegistrationScreen;
