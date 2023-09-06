import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";
import FavoritesScreen from "../pages/FavoritesScreen";
import MessagesScreen from "../pages/MessagesScreen";
import ProfileScreen from "../pages/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import Explore from "../pages/Explore";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={MessagesScreen}
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
