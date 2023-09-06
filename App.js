import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./frontend/src/components/TabBar";
import { createStackNavigator } from "@react-navigation/stack";
import Hobby from "./frontend/src/pages/Hobby";
import Travelers from "./frontend/src/pages/Travelers";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Where"
          component={TabBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Hobby" component={Hobby} />
        <Stack.Screen name="Travelers" component={Travelers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
