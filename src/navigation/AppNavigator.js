import React from 'react';
import { Platform, View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import OrderFoodScreen from '../screens/OrderFood';
import ViewOrderScreen from '../screens/ViewOrder';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import UserScreen from '../screens/User';
import Colors from '../constants/colors';

import { Ionicons } from '@expo/vector-icons';


const FoodStack = createStackNavigator();

const FoodsNavigator = () => {
    return (
        <FoodStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.secondaryColor : '',
            },
            headerTintColor:
                Platform.OS === 'android' ? '#fff' : Colors.secondaryColor,
                
        }}>
            
      <FoodStack.Screen
                name='Order Food'
                component={OrderFoodScreen} />
      <FoodStack.Screen
                name='Food Detail'
                component={FoodDetailScreen} />
    </FoodStack.Navigator>
    
    );
};  

 const FoodTab = createBottomTabNavigator();

const FoodTabNavigator = () => {
    return (
        <FoodTab.Navigator
        tabBarOptions={{
            activeTintColor: Colors.primaryColor,
            inactiveTintColor: '#999',
          }}>
            <FoodTab.Screen
            name='Order Food'
            component={FoodsNavigator}
            options={() => ({
              tabBarIcon: ({ }) => {
                return <Ionicons name='ios-restaurant' size={25} color={Colors.secondaryColor} />;
              },
            })}
          />
          <FoodTab.Screen
            name='User Profile'
            component={UserScreen}
            options={() => ({
              tabBarIcon: ({ }) => {
                return <Ionicons name='ios-person' size={25} color={Colors.secondaryColor} />;
              },
            })}
          />
          <FoodTab.Screen
            name='View Orders'
            component={ViewOrderScreen}
            options={() => ({
              tabBarIcon: ({ }) => {
                return <Ionicons name='ios-menu' size={25} color={Colors.secondaryColor} />;
              },
            })}
          />
        </FoodTab.Navigator>

        );
}; 


export default FoodTabNavigator;
