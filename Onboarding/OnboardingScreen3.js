import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

const OnboardingScreen3 = ({ navigation }) => {
  const handleSwipe = () => {
    navigation.navigate('LoginScreen');
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const handleSignup = () => {
    navigation.navigate('RegistrationScreen');
  };



  return (
    <View style={styles.container}>
      <Image source={require('../assets/onboarding3.jpeg')} style={styles.image} />
      <Text style={styles.text}>Get Started Now!</Text>
      <Text style={styles.description}>
        Start using our app and experience a new way of doing things.
      </Text>
      <TouchableOpacity onPress={handleSwipe}>
        <Text style={styles.swipeText}>Swipe to Continue</Text>
      </TouchableOpacity>


      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
    paddingHorizontal: 20,
    backgroundColor:'white',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  swipeText: {
    marginTop: 20,
    color: 'blue',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '80%', 
    },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },


});

export default OnboardingScreen3;
