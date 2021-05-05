/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid,
  Platform
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';
import Router from './src/navigation/Root'
import HomeNavigator from './src/navigation/HomeNavigator'

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);

import { withAuthenticator } from 'aws-amplify-react-native';

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
        console.log("You can now OTO!");
      } else {
        console.log("Camera permission denied");
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
      <Router/>
    </>
    // <SafeAreaView style={backgroundStyle}>
    
    // </SafeAreaView>
  );
};

// export default App;
export default withAuthenticator(App);