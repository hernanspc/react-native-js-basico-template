import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  SafeAreaView,
  StyleSheet,
  StatusBar
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
} from "@react-navigation/drawer";

import CustomDrawerContent from "./src/screens/drawer";

import Home from "./src/screens/home";

//Stack
import StackPrimary from "./src/stacks/StackPrimary";
import StackSencondary from "./src/stacks/StackSecondary";

import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false
            , drawerStyle: {
              backgroundColor: '#eee',
              width: '80%',
            },
          }}
          // screenOptions={{ headerShown: true }}
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
              title: "Primary",
              headerTitleStyle: {
                fontWeight: "bold",
                // color: "white",
              },
              drawerIcon: (config) => (
                <View style={{
                  backgroundColor: "#A2E3FF",
                  // marginRight: 20,
                  padding: 8,
                  borderRadius: 10,
                }}>
                  <MaterialIcons
                    name="chess-king"
                    size={20}
                    color="#0D85FB"
                  />
                </View>
              ),
            }}
            component={StackPrimary}
          />
          <Drawer.Screen
            name="Second"
            options={{
              title: "Secondary ",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
              },
              drawerIcon: (config) => (
                <View style={{
                  backgroundColor: "#A2E3FF",
                  // marginRight: 20,
                  padding: 8,
                  borderRadius: 10,
                }}>
                  <MaterialIcons
                    name="chart-timeline-variant"
                    size={20}
                    color="#0D85FB"
                  />
                </View>
              ),
            }}
            component={StackSencondary}
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
