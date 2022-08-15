import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
} from "@react-navigation/drawer";

import CustomDrawerContent from "./src/screens/drawer";

import Home from "./src/screens/home";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {

  const handleExitApp = () => {
    Alert.alert("Salir", "¿Quieres salir de la Aplicación?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: logoutExitApp },
    ]);
  };

  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          // screenOptions={{ headerShown: false }}
          screenOptions={{ headerShown: true }}
          useLegacyImplementation
          drawerContent={(props) => (
            <CustomDrawerContent
              {...props}
              // fnChangeAvatar={fnChangeAvatar}
              signOff={handleExitApp}
            />
          )}
        >
          <Drawer.Screen
            name="Home"
            options={{
              title: "asa ",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
              }
            }}
            component={Home}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MyDrawer;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    zIndex: 1,
  },
});
