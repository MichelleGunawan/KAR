/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/HomeScreen';

navigator.geolocation = require('@react-native-community/geolocation');

const App: () => Node = () => {
  const androidPermissions = async() => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "KÄR App Location Permission",
          message:
            "KÄR App needs access to your location " +
            "so you can take awesome rides.",
          // buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can now KÄR!");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() =>{
    if(Platform.OS=='android'){
      androidPermissions();
    }
    else{
      Geolocation.requestAuthorization()
    }
  },  [])

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView>
        <HomeScreen/>
      </SafeAreaView>
    </>
  );
};

export default App;
