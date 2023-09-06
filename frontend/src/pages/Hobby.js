import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";

export default function Hobby({navigation}) {

  const navigateToTravelers = () => {
    navigation.navigate("Travelers");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you love ?</Text>
      <View style={styles.buttonContainer}>
        <Pressable>
          <Image
            source={require("../../../assets/nature.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Nature</Text>
        </Pressable>
        <Pressable>
          <Image
            source={require("../../../assets/culture.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Culture</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable>
          <Image
            source={require("../../../assets/sport.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Sport</Text>
        </Pressable>
        <Pressable>
          <Image
            source={require("../../../assets/sortie.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Sorties</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable>
          <Image
            source={require("../../../assets/art.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Art </Text>
        </Pressable>
        <Pressable>
          <Image
            source={require("../../../assets/linguistique.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Linguistique</Text>
        </Pressable>
      </View>
      <View style={{maxWidth: 100, marginLeft: 140, marginTop: 50}}>
      <FontAwesome.Button
        style={styles.next}
          name="arrow-right"
          backgroundColor="#3CB371"
          onPress={navigateToTravelers}
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
    backgroundColor: "#FFFAFA"
  },
  title: {
    fontSize: 26,
    color: "#3CB371",
    paddingTop: "5%",
    textAlign: "center",
    fontWeight: "500"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "70%",
    marginTop: 20 // Centre les éléments horizontalement
  },
  image: {
    width: 150, // Ajustez la largeur de l'image comme vous le souhaitez
    height: 100, // Ajustez la hauteur de l'image comme vous le souhaitez
    borderRadius: 10, // Espace entre l'image et le texte
    margin: 15,
    marginLeft: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    position: "absolute",
    color: "white",
    bottom: 50,
    left: 0,
    right: 0,
    // Ajustez la taille de police du texte comme vous le souhaitez
  },
  next : {
    justifyContent:"center"
  }
});
