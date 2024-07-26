import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const FullHeightStoryCard = ({ imageUrl, storyTitle, storyDescription }) => {
  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.image} imageStyle={styles.imageStyle}>
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{storyTitle}</Text>
            <Text style={styles.description}>{storyDescription}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 500,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    flex: 1,
   // justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 8, // Ensures the image has rounded corners matching the card
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 5,
  },
});

export default FullHeightStoryCard;
