import { StyleSheet,View,Image,Text,Button } from 'react-native';
import OnboardingStack from './Onboarding/OnboardingStack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Login screens/LoginScreen ';
import RegistrationScreen from './Login screens/RegistrationScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AdminDashboard from './Admin dashboard/AdminDashboard';

const Stack = createStackNavigator();
export default function App() {

  return (
   <>
<NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="  " component={OnboardingStack} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    paddingBottom:-500,
  },
  stretch: {
    width: 350,
    height: 350,
  },
  text:{
    fontWeight: 'bold',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:50,
    paddingBottom:0,
  },
  imgview:{
    paddingBottom:50,
  },
  paragraphtext:{
    paddingHorizontal:29,
    fontSize:10,
    textAlign:'justify',
    fontSize: 13,
    paddingTop:10,
    fontWeight: '400',
  },
  headingtext:{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center',
  },
  textframe :{
    paddingTop:40,
  }

});
