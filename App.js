import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/loginScreen';
import DashboardScreen from './Screens/dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteContextProvider from './Screens/context/favroiteContext';
import SplashScreen from './Screens/splashScreen/splashScreen';
const Stack= createNativeStackNavigator();

export default function App() {
  return (
   <FavoriteContextProvider>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown:false}}>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }} // Hide the header for the splash screen
          />
      <Stack.Screen name = "login" component={LoginScreen}/>
      <Stack.Screen name = "signup" component={SignupScreen}/>
      <Stack.Screen name = "dashboard" component={DashboardScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </FavoriteContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
