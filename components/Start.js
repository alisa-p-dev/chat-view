import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";

const image = require("../assets/background-image.png");
const colorOptions = ["#090C08", "#474056", "#8A95A5", "#B9C6AE"];

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

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
                  styles.colorOption,
                  { backgroundColor: color },
                  selectedColor === color && styles.selectedColorOption,
                ]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Chat", { name: name })}
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
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
