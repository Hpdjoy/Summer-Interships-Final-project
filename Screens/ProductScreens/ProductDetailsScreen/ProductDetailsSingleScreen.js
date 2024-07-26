import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button, Alert, ScrollView } from 'react-native';
import { FavoriteContext } from '../../context/favroiteContext';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const FavoriteItem = useContext(FavoriteContext);

  const AddToCart = (id) => {
    alert(`${id} item added to cart`);
    console.log('Adding to cart', id);
    FavoriteItem.addFavroiteItem(id);
  };

  const RemoveFromFav = (id) => {
    alert(`${id} item removed from favorites`);
    console.log('Removing', id);
    FavoriteItem.removeFromFavroiteItem(id);
  };

  return (
      <ScrollView>
    <View style={styles.container}>
      <Image
        style={styles.productImage}
        source={{ uri: product.image }}
      />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productCategory}>{product.category}</Text>
      <Text style={styles.productRating}>
        Rating: {product.rating.rate} ({product.rating.count})
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => AddToCart(product.id)}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => RemoveFromFav(product.id)}
        >
          <Text style={styles.buttonText}>Remove from Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  productCategory: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  productRating: {
    fontSize: 14,
    color: '#888',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor:"red",
    padding: 15,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
