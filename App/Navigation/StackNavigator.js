import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen'
import BottomNavigation from './BottomNavigation';
import Login from '../Screens/Login';
const Stack = createNativeStackNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" options={{headerShown:false}} component={SplashScreen} />
      <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
      <Stack.Screen name="App" options={{headerShown:false}} component={BottomNavigation} />
    </Stack.Navigator>
  );
}

export default NavigationStack