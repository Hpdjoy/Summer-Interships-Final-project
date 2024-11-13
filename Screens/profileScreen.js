import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      alert("are you Sure to Logout?")
      await AsyncStorage.removeItem('user');
      navigation.navigate('login'); 
    } catch (error) {
      console.error("Error clearing data", error);
      Alert.alert("Logout Error", "An error occurred while logging out.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My profile</Text>
      </View>
      <View style={styles.profileInfo}>
        <Image source={require('../assets/avatar.jpg')} style={styles.profileImage} />
        {user ? (
          <>
            <Text style={styles.profileName}>{user.name}</Text>
            <Text style={styles.profileEmail}>{user.email}</Text>
          </>
        ) : (
          <Text style={styles.profileName}>Loading...</Text>
        )}
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>My orders</Text>
          <Text style={styles.sectionSubText}>Already have 12 orders</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>Shipping addresses</Text>
          <Text style={styles.sectionSubText}>3 addresses</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>Payment methods</Text>
          <Text style={styles.sectionSubText}>Visa *34</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>Promocodes</Text>
          <Text style={styles.sectionSubText}>You have special promocodes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>My reviews</Text>
          <Text style={styles.sectionSubText}>Reviews for 4 items</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.sectionText}>Settings</Text>
          <Text style={styles.sectionSubText}>Notifications, password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoutContainer}>
        <Button title="Logout" onPress={handleLogout} color="#ff4d4d" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileInfo: {
    padding: 16,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  profileEmail: {
    fontSize: 14,
    marginTop: 4,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionSubText: {
    fontSize: 14,
  },
});

export default ProfileScreen;