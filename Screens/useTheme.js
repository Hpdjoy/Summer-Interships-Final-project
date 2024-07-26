import { useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import LinearGradient from 'react-native-linear-gradient';

const useTheme = () => {
  const systemTheme = useColorScheme(); // 'light' or 'dark'
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');

  useEffect(() => {
    setIsDarkMode(systemTheme === 'dark');
  }, [systemTheme]);

  const themeStyles = isDarkMode ? darkTheme : lightTheme;

  return { isDarkMode, themeStyles, toggleTheme: () => setIsDarkMode(!isDarkMode) };
};

const commonStyles = {
  container: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 16,
  },
  headText: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 100,
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    height: 55,
    width: "90%",
    borderWidth: 1,
    borderRadius: 8,
    padding: 3,
    paddingLeft: 8,
    margin: 5,
  },
  innerText: {
    fontSize: 16,
  },
  innerInput: {
    fontSize: 16,
  },
  buttonContainer: {
    flex: 0.5,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  SignupBottom: {
    flex: 0.5,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  SocialSignupButton: {
    flex: 1,
    flexDirection: "row",
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: "center",
    padding: 10,
  },
  SocialButton: {
    height: 60,
    width: 80,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
};

const lightTheme = {
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: "#fff",
  },
  headText: {
    ...commonStyles.headText,
    color: "#000",
  },
  textBox: {
    ...commonStyles.textBox,
    backgroundColor: "white",
    borderColor: "black",
  },
  innerText: {
    ...commonStyles.innerText,
    color: "#000",
  },
  innerInput: {
    ...commonStyles.innerInput,
    color: "#000",
  },
  iconColor: "#000",
  button: {
    ...commonStyles.button,
    backgroundColor: "red",
  },
  buttonText: {
    ...commonStyles.buttonText,
    color: "white",
  },
  SignupBottomText: {
    color: "#000",
  },
  SocialButton: {
    ...commonStyles.SocialButton,
    backgroundColor: "#fff1",
    borderColor: "black",
  },
};

const darkTheme = {
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: "#333",
  },
  headText: {
    ...commonStyles.headText,
    color: "#fff",
  },
  textBox: {
    ...commonStyles.textBox,
    backgroundColor: "#444",
    borderColor: "gray",
  },
  innerText: {
    ...commonStyles.innerText,
    color: "#fff",
  },
  innerInput: {
    ...commonStyles.innerInput,
    color: "#fff",
  },
  iconColor: "#fff",
  button: {
    ...commonStyles.button,
    backgroundColor: "red",
  },
  buttonText: {
    ...commonStyles.buttonText,
    color: "white",
  },
  SignupBottomText: {
    color: "#fff",
  },
  SocialButton: {
    ...commonStyles.SocialButton,
    backgroundColor: "#444",
    borderColor: "gray",
  },
};

export default useTheme;
