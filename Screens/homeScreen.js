import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Button, ScrollView, Pressable } from "react-native";
import ProductScreen from "./ProductScreens/productScreen";
import ProductDetailScreen from "./ProductScreens/ProductDetailsScreen/ProductDetailsSingleScreen";
import HorizontalScrollStory from "./ProductScreens/HomePageComponents/horzontalStory";
import ProductCard from "./ProductScreens/HomePageComponents/DiscountCard";
import FullWidthProductCard from "./ProductScreens/HomePageComponents/FullImageProductCard";
import FullHeightStoryCard from "./ProductScreens/HomePageComponents/FullHeightStory";
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
      <HorizontalScrollStory />
      <ProductCard
        imageUrl="https://i.postimg.cc/FKpvK4LF/image.png"
        discount="20% OFF"
        offer="Buy 1 Get 1 Free"
      />
      <ProductCard
        imageUrl="https://i.postimg.cc/rFxvmT66/image.png"
        discount="15% OFF"
        offer="Free Shipping on Orders Over $50"
      />
      <FullWidthProductCard
        imageUrl="https://i.postimg.cc/6QBsFpQ6/image.png"
        discount="20% OFF"
        offer="Buy 1 Get 1 Free"
      />
      <FullHeightStoryCard
        imageUrl="https://i.postimg.cc/pTXWy0CK/image.png"
        storyTitle="Hair colours"
        storyDescription="Get tickets to Dubai"
      />
    
     
      <Pressable style={styles.Button} onPress={() => navigation.navigate('Product')} // Navigate to ProductScreen
      ><Text style={styles.welcomeText}>View All</Text></Pressable>
    </ScrollView>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} 
       screenOptions={{headerShown:false}} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 10,
    alignItems: 'center',
  },
  welcomeText: {
    
    color:'white',
    fontSize: 22,
    fontWeight: '900',
      textAlign: 'center',
  },
  Button:{
    height: 48,
    width: 342,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor:'#e74c3c'
  }
});

export default HomeStackNavigator;
