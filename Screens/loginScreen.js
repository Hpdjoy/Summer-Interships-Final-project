import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  SafeAreaView,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useTheme from './useTheme';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkLoggedIn = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        navigation.navigate('dashboard');
      }
    };
    checkLoggedIn();
  }, []);

  const handleLogin = async () => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      if (user && user.email === email && user.password === password) {
        console.log("Login successful");
        navigation.navigate('dashboard');
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error("Error retrieving data", error);
    }
  };

  const { isDarkMode, themeStyles, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={themeStyles.container}>
      <Text style={themeStyles.headText}>Login</Text>

      <View style={themeStyles.inputContainer}>
        <View style={themeStyles.inputContainer}>

          <View style={themeStyles.textBox}>
            <Text style={themeStyles.innerText}>Email</Text>
            <TextInput
              style={themeStyles.innerInput}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={themeStyles.textBox}>
            <Text style={themeStyles.innerText}>Password</Text>
            <TextInput
              style={themeStyles.innerInput}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={{
            width: "100%",
            flexDirection: 'row',
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10
          }}>
            <Pressable
              onPress={() => navigation.navigate('signup')}
            ><Text style={themeStyles.innerText}>
                Create account</Text>
            </Pressable>
            <Pressable><Text style={themeStyles.innerText}>
              Forgot your password? <Icon name="arrow-forward-outline" size={20} color={themeStyles.iconColor} /></Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={themeStyles.buttonContainer}>
        <Pressable style={themeStyles.button} onPress={handleLogin}>
          <Text style={themeStyles.ButtonText}>Login</Text>
        </Pressable>
      </View>

      <View style={themeStyles.SignupBottom}>
        <View>
          <Text style={themeStyles.SignupBottomText}>
            Or login with Social Account
          </Text>
        </View>
        <View style={themeStyles.SocialSignupButton}>
          <Pressable style={themeStyles.SocialButton}>
            <Image source={require("../assets/fecebook.png")} style={{ height: 30, width: 30 }} />

          </Pressable>
          <Pressable style={themeStyles.SocialButton}>
            <Image source={require("../assets/google.png")} style={{ height: 30, width: 30 }} />
          </Pressable>
        </View>
        <Button title="Toggle Mode" onPress={toggleTheme} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
