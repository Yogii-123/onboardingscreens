import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen1 from './OnboardingScreen1';
import OnboardingScreen2 from './OnboardingScreen2';
import OnboardingScreen3 from './OnboardingScreen3';

const Stack = createStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding1">
      <Stack.Screen name="Onboarding" component={OnboardingScreen1} />
      <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
      <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
