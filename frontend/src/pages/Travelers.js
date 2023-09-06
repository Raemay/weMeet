import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";

export default function Travelers({navigation}) {
  const navigateToResults = () => {
    navigation.navigate("Results");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who is traveling ?</Text>
      <Text style={styles.title2}>Adulte</Text>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 60,
          justifyContent: "space-between",
        }}
      >
        <FontAwesome.Button
          name="male"
          backgroundColor={"transparent"}
          color="black"
          size={100}
        ></FontAwesome.Button>
        <FontAwesome.Button
          name="male"
          backgroundColor={"transparent"}
          color="black"
          size={100}
        ></FontAwesome.Button>
        <FontAwesome.Button
          name="male"
          backgroundColor={"transparent"}
          color="black"
          size={100}
        ></FontAwesome.Button>
      </View>
      <Text style={styles.title2}>Enfants</Text>
      <View style={{ flexDirection: "row", marginHorizontal: 70 }}>
        <FontAwesome.Button
          name="child"
          backgroundColor={"transparent"}
          color="black"
          size={75}
        ></FontAwesome.Button>
        <FontAwesome.Button
          name="child"
          backgroundColor={"transparent"}
          color="black"
          size={75}
        ></FontAwesome.Button>
        <FontAwesome.Button
          name="child"
          backgroundColor={"transparent"}
          color="black"
          size={75}
        ></FontAwesome.Button>
      </View>
      <Text style={styles.title2}>Toutou</Text>
      <View style={{ flexDirection: "row", marginHorizontal: 145 }}>
        <FontAwesome5.Button
          name="dog"
          backgroundColor={"transparent"}
          color="black"
          size={50}
        ></FontAwesome5.Button>
      </View>
      <View style={{ maxWidth: 100, marginLeft: 140, marginTop: 50 }}>
        <FontAwesome.Button
          style={styles.next}
          name="arrow-right"
          backgroundColor="#3CB371"
          onPress={navigateToResults}
        >
          Next
        </FontAwesome.Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFAFA",
  },
  title: {
    fontSize: 26,
    color: "#3CB371",
    paddingTop: "5%",
    textAlign: "center",
    fontWeight: "500",
  },
  title2: {
    color: "#3CB371",
    fontSize: 20,
    marginHorizontal: 154,
    marginTop: 20,
  },
  next: {
    justifyContent: "center",
  },
});
