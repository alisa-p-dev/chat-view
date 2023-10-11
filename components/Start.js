import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

const image = require("../assets/background-image.png");
const colorOptions = ["#090C08", "#474056", "#8A95A5", "#B9C6AE"];

const Start = ({ navigation }) => {
  const auth = getAuth();

  const signInUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate("Chat", {
          name: name,
          _id: result.user.uid,
          backgroundColor: selectedColor,
        });
        alert("Signed in successfully!");
      })
      .catch((error) => {
        alert("Unable to sign in, try again later.");
      });
  };

  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  const handleEnterChat = () => {
    if (name.trim() !== "") {
      navigation.navigate("Chat", { name, backgroundColor });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.appTitle}>ChatView</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Your Name"
          />
          <Text style={styles.chooseColorText}>Choose Background Color</Text>
          <View style={styles.colorOptionsContainer}>
            {colorOptions.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  {
                    borderRadius: 50,
                    borderColor: "#FFFFFF",
                    borderWidth: 2,
                  },
                  selectedColor === color && styles.selectedColorOption,
                ]}
                onPress={() => setSelectedColor(color)}
              >
                <View
                  style={[
                    styles.colorOption,
                    {
                      backgroundColor: color,
                      margin: 2,
                    },
                  ]}
                ></View>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Chat", {
                name: name,
                backgroundColor: selectedColor,
              })
            }
          >
            <TouchableOpacity style={styles.button} onPress={signInUser}>
              <Text style={styles.buttonText}>Start Chatting</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,

    padding: "6%",
  },
  appTitle: {
    flex: 2,
    alignSelf: "center",
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  inputContainer: {
    flex: 1.5,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: "4%",
    width: "100%",
  },
  textInput: {
    width: "88%",
    height: 50,
    padding: 15,
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 0.5,
  },
  button: {
    height: 50,
    width: "88%",
    backgroundColor: "#757083",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  chooseColorText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 1,
    marginTop: 10,
  },
  colorOptionsContainer: {
    width: "88%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  selectedColorOption: {
    borderWidth: 2,
    borderColor: "#757083",
  },
});

export default Start;
