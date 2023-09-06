import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

export default function Explore({ navigation }) {
  const [text, onChangeText] = useState("");

  const navigateToHobby = () => {
    navigation.navigate("Hobby");
  };
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Where do you want to go ?</Text>
      <Image
        source={require("../../../assets/europe_map.png")}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Which city ?"
        value={text}
      />
      <FontAwesome.Button
        name="arrow-right"
        backgroundColor="#3CB371"
        onPress={navigateToHobby}
      >
        Next
      </FontAwesome.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: "#3CB371",
    paddingTop: "5%",
    fontWeight:"500"
  },
  image: {
    resizeMode: "contain",
    width: "70%",
    height: "70%",
  },
  background: {
    backgroundColor: "#FFFAFA",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  input: {
    height: "10%",
    borderWidth: 1,
    borderRadius: 10,
    margin: 0,
    width: "50%",
    textAlign: "center",
    marginBottom: "5%",
  },
});
