/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
import { FlashList } from '@shopify/flash-list';
import { tweets } from './src/mock/tweets'
import TweetCard from './src/components/TweetCard'
import Animated, { useSharedValue } from "react-native-reanimated";
// import { NavigationContainer } from '@react-navigation/native';


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

const Item = ({ item }) => {
  const myValue = useSharedValue(0);
  useEffect(() => {
    // Reset value when id changes (view was recycled for another item)
    myValue.value = 0;
  }, [item.id, myValue]);
  // return <Animated.FlashList />;
  return <TweetCard {...item} />
};

const MyList = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  // return <FlashList renderItem={Item} estimatedItemSize={100} />;
  return (
    <FlashList
      data={tweets}
      contentContainerStyle={{ backgroundColor: 'aliceblue' }}
      renderItem={({ item }) => <TweetCard {...item} />}
      estimatedItemSize={200}
    />
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <
      // style={backgroundStyle}
      >
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}

      {/* <Avatar
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
        title="delete Storage--" /> */}
      <MyList />

      {/* <Lottie
        source={require('./src/assets/lotties/nofound.json')}
        autoPlay
        loop
      /> */}

    </>
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
