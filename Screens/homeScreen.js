import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Button } from "react-native";
import ProductScreen from "./ProductScreens/productScreen";
import ProductDetailScreen from "./ProductScreens/ProductDetailsScreen/ProductDetailsSingleScreen";
import HorizontalScrollStory from "./ProductScreens/HomePageComponents/horzontalStory";
import { ScrollView } from "react-native-gesture-handler";
import ShopScreen from "./ShopScreen";
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <HorizontalScrollStory/>
           
      <Text style={styles.welcomeText}>Welcome to Home Screen!</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate('Product')} // Navigate to ProductScreen
      />
    </View>
    </ScrollView>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainHome" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeStackNavigator;
