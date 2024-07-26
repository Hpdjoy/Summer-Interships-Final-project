import React, { useEffect } from 'react';
import { View, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to 'login' after 2 seconds
    const timer = setTimeout(() => {
      navigation.navigate('login'); // Make sure 'login' matches exactly
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/splash1.png')} // Ensure this path is correct
          style={styles.splashImage}
          resizeMode="cover" // Ensure the image covers the container
        />
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
