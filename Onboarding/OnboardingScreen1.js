import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

const OnboardingScreen1 = ({ navigation }) => {
  const handleSwipe = () => {
    navigation.navigate('Onboarding2');
  };

  const handleSkip = () => {
    navigation.navigate('LoginScreen'); 
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/main.jpg')} style={styles.image} />
      <Text style={styles.text}>Welcome to Your App</Text>
       <TouchableOpacity onPress={handleSwipe}>
        <Text style={styles.swipeText}>Swipe to Continue</Text>
      </TouchableOpacity> 

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSwipe} style={styles.nextButton}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  swipeText: {
    marginTop: 20,
    color: 'blue',
  },
  skipText:{
    color: 'black',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    width: '80%',
  },
  skipButton: {},
 
  nextButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});

export default OnboardingScreen1;
