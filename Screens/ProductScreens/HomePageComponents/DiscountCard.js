import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ imageUrl, discount, offer }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.discount}>{discount}</Text>
        <Text style={styles.offer}>{offer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  discount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  offer: {
    fontSize: 16,
    color: '#2c3e50',
    marginTop: 5,
  },
});

export default ProductCard;
