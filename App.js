import { StyleSheet, Text, View } from "react-native";
// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";
// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { LogBox } from "react-native";

// Create the navigator
const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBSIbW-vl6dX8y7FQefAOl7bwbxnO-rtWc",
    authDomain: "chat-view-febf4.firebaseapp.com",
    projectId: "chat-view-febf4",
    storageBucket: "chat-view-febf4.appspot.com",
    messagingSenderId: "998528690133",
    appId: "1:998528690133:web:180eb97beedeee43c2ff5c",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
