import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./homeScreen";
import CartScreen from "./CartScreen";
import ProfileScreen from "./profileScreen";
import FavroiteScreen from "./FavroiteScreen";
import ShopScreen from "./ShopScreen";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }  else if (route.name === 'Favroite') {
            iconName = focused ? 'star' : 'star-outline';
          }  else if (route.name === 'Shop') {
            iconName = focused ? 'bag' : 'bag-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Favorite" component={FavroiteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardScreen;
