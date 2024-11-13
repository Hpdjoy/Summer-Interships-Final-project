import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Kurtas & Kurta Sets',
    image: 
    'https://i.postimg.cc/rzXP149M/Screenshot-2024-07-26-214631.png',
  },
  {
    id: '2',
    title: 'Dresses',
    image: 
    'https://i.postimg.cc/NFcXR8ng/image.png',
   
  },
  {
    id: '3',
    title: 'Sarees',
    image: 
    'https://i.postimg.cc/T3q3Wqc2/image.png',
  },
  {
    id: '4',
    title: 'Flats & Heels',
    image:
    'https://i.postimg.cc/zXSfLY5H/image.png',
  },
  {
    id: '5',
    title: 'Handbags',
    image:
    'https://i.postimg.cc/g04SrJtt/image.png',
  },
  {
    id: '6',
    title: 'Shorts',
    image: 
    'https://i.postimg.cc/xCvKqFdf/image.png',
  },
];

const HorizontalScrollStory = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DATA.map((item) => (
          <View key={item.id} style={[styles.item, selectedId === item.id && styles.selectedItem]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
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
    justifyContent: 'flex-end',
    backgroundColor: 'lightgray', 
  },
  selectedItem: {
    backgroundColor: 'white', 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    alignItems: 'center',
    paddingVertical: 5,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HorizontalScrollStory;
