import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const DATA = [
      {
        id: '1',
        title: 'Kurtas & Kurta Sets',
        image: { uri: 'https://example.com/images/kurtas_kurta_sets.png' }, // Replace with your actual image URL
      },
      {
        id: '2',
        title: 'Sarees',
        image: { uri: 'https://example.com/images/sarees.png' }, // Replace with your actual image URL
      },
      {
        id: '3',
        title: 'Dresses',
        image: { uri: 'https://example.com/images/dresses.png' }, // Replace with your actual image URL
      },
      {
        id: '4',
        title: 'Flats & Heels',
        image: { uri: 'https://example.com/images/flats_heels.png' }, // Replace with your actual image URL
      },
      {
        id: '5',
        title: 'Handbags',
        image: { uri: 'https://example.com/images/handbags.png' }, // Replace with your actual image URL
      },
      {
        id: '6',
        title: 'Shorts',
        image: { uri: 'https://example.com/images/shorts.png' }, // Replace with your actual image URL
      },
    ];
    

const HorizontalScrollStory = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DATA.map((item) => (
          <View key={item.id} style={[styles.item, selectedId === item.id && styles.selectedItem]}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    width: 150,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray', // Default background color
  },
  selectedItem: {
    backgroundColor: 'white', // Change background color for selected item
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HorizontalScrollStory;