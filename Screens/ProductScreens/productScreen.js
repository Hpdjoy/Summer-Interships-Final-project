import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Data from '../../Data/data'; // Ensure this path is correct

const ProductScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image
        style={styles.productImage}
        source={{ uri: item.image }}
      />
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productRating}>Rating: {item.rating.rate}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={Data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.productList}
    />
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productRating: {
    fontSize: 14,
    color: '#888',
  },
  productList: {
    paddingBottom: 20,
  },
});

export default ProductScreen;
