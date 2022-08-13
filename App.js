/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar, Badge, withBadge } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lottie from 'lottie-react-native';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value)
  } catch (e) {
    // saving error
  }
}

const storeDataObj = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}


const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if (value !== null) {
      console.log('se obtuvo: ', value)
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
}


const getDataObj = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}

const deleteData = async () => {
  try {
    await AsyncStorage.removeItem('@storage_Key')
  } catch (e) {
    // remove error
  }

  console.log('💎Done.')
}


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={backgroundStyle}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Header />

      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Text>
          <Icon name="rocket" size={30} color="#900" />
        </Text>
        <Text>
          <FontAwesome5 name="coins" size={14} color="#EABE3F" />
        </Text>
        <Text>
          <MaterialCommunityIcons name="logout" size={24} color="#002A8C" />
        </Text>
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="primary" />
        <Badge status="warning" />

        <Avatar
          rounded
          source={{
            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
          }}
          size="large"
        />
        <Button
          onPress={() => storeData('Mac')}
          title="Save Storage--" />
        <Button
          onPress={() => getData()}
          title="Read Storage--" />
        <Button
          onPress={() => deleteData()}
          title="delete Storage--" />
        {/* <LearnMoreLinks /> */}
        <Lottie
          source={require('./src/assets/lotties/nofound.json')}
          autoPlay
          loop
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
