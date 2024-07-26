import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const ShopScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <Text style={styles.headerTitle}>Categories</Text>
      </View>
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Kids</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.saleBanner}>
        <Text style={styles.saleBannerText}>SUMMER SALES</Text>
        <Text style={styles.saleBannerSubtext}>Up to 50% off</Text>
      </View>
      <ScrollView>
      <View style={styles.categoriesContainer}>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>New</Text>
          <Image style={styles.categoryImage} source={require("../assets/ProductImages/lyfstyle.png")} />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Clothes</Text>
          <Image style={styles.categoryImage} source={require("../assets/ProductImages/fashion1.png")} />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Shoes</Text>
          <Image style={styles.categoryImage} source={require("../assets/ProductImages/shoes1.png")} />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>Accessories</Text>
          <Image style={styles.categoryImage} source={require("../assets/ProductImages/accesories.png")} />
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchButton: {
    padding: 8,
  },
  searchButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  categoryButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  saleBanner: {
    backgroundColor: '#f00',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saleBannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  saleBannerSubtext: {
    fontSize: 16,
    color: '#fff',
  },
  categoriesContainer: {
    flex: 1,
    padding: 16,
  },
  category: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
  },
  categoryImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});



export default ShopScreen;
