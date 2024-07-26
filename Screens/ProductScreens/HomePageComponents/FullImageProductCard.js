import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const FullWidthProductCard = ({ imageUrl, discount, offer }) => {
  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.discount}>{discount}</Text>
          <Text style={styles.offer}>{offer}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
 

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  discount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  offer: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 5,
  },
});

export default FullWidthProductCard;
