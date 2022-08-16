import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router/router'
import MyDrawer from './DrawerPrincipal';
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <MyDrawer />
    </NativeBaseProvider>
  );
}