import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Modal  } from 'react-native';
import { Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('priyadriftmark@gmail.com');
  const [password, setPassword] = useState('1234567');
  const [resetModalVisible, setResetModalVisible] = useState(false);


  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }
    console.log('Logging in with:', username, password);
    navigation.navigate('RegistrationScreen');
  };


  const handleResetPassword = () => {
       setResetModalVisible(false);
       Alert.alert('Success', 'Your password has been successfully reset.');

  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.borderbox}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email/Mobile No:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email/mobile no"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
         <TouchableOpacity onPress={() => setResetModalVisible(true)}>
          <Text style={styles.linkTextpassword}>Forgot your password? Reset it here</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginbutton}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      </View>
      </View>

<View>
      <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      </View>


      <Modal
        animationType="slide"
        transparent={true}
        visible={resetModalVisible}
        onRequestClose={() => setResetModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Reset Password</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter your email/mobile no"
              onChangeText={(value) => console.log(value)} 
            />
            <TouchableOpacity style={styles.modalButton} onPress={handleResetPassword}>
              <Text style={styles.modalButtonText}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setResetModalVisible(false)}>
              <Text style={styles.modalLinkText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


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
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderbox:{
    width: '70%',
    borderColor:'grey',
    borderWidth: 0.5,
    padding:20,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5, // Add border-radius for rounded corners
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  loginbutton:{
padding:10,
  }, 

   linkText: {
    marginTop: 100,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  



  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  modalLinkText: {
    color: 'blue',
    textAlign: 'center',
  },
  linkTextpassword:{
    color: 'blue',
    textAlign: 'left',
    fontSize: 10,
  },


});

export default LoginScreen;
