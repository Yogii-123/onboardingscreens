import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

const OnboardingScreen2 = ({ navigation }) => {
  const handleSwipe = () => {
    navigation.navigate('Onboarding3');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/splashimage.png')} style={styles.image} />
      <Text style={styles.text}>Discover Amazing Features</Text>
      <Text style={styles.description}>
        Explore the powerful features that make our app stand out from the rest.
      </Text>
      <TouchableOpacity onPress={handleSwipe}>
        <Text style={styles.swipeText}>Swipe to Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
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

});

export default OnboardingScreen2;
