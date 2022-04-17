import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AllOrders from '../Screens/AllOrders';
import DeliveredOrders from '../Screens/DeliveredOrders';
import colors from '../Constants/colors';
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="All Orders"
        >
            <Tab.Screen name="All Orders" component={AllOrders} options={{
                headerShown: false,
                tabBarActiveTintColor:colors.primary,
                tabBarActiveBackgroundColor:"#FFDFDD",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="format-list-bulleted"  color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Delivered Orders" component={DeliveredOrders} options={{
                headerShown: false,
                tabBarActiveTintColor:colors.primary,
                tabBarActiveBackgroundColor:"#FFDFDD",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="playlist-check" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
    
}