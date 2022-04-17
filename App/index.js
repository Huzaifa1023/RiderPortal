import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './Navigation/BottomNavigation'
import Layout from './Layout';
import SplashScreen from './Screens/SplashScreen';
import NavigationStack from './Navigation/StackNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Layout>
        <NavigationStack/>
      </Layout>
    </NavigationContainer>
  );
}