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

import Amplify, {Auth, API, graphqlOperation,} from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);

import {withAuthenticator} from 'aws-amplify-react-native';
import {getCarId} from './src/graphql/queries';
import {createCar} from './src/graphql/mutations';

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

  // useEffect(() =>{
  //   if(Platform.OS=='android'){
  //     androidPermissions();
  //   }
  //   else{
  //     Geolocation.requestAuthorization()
  //   }},  [])

  useEffect(() => {
    if(Platform.OS=='android'){
          androidPermissions();
        }
        else{
          Geolocation.requestAuthorization()
        }

    const updateUserCar = async () => {
      // Get authenticated user
      const authenticatedUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!authenticatedUser) {
        return;
      }

      // Check if the user has already a car
      const carData = await API.graphql(
        graphqlOperation(
          getCarId,
          { id: authenticatedUser.attributes.sub }
        )
      )

      if (!!carData.data.getCar) {
        console.log("User already has a car assigned");
        return;
      }

      // If not, create a new car for the user
      const newCar = {
        id: authenticatedUser.attributes.sub,
        type: 'Kar',
        userId: authenticatedUser.attributes.sub,
      }
      await API.graphql(graphqlOperation(
        createCar, { input: newCar }
      ))
    };

    updateUserCar();
  }, [])

  const isDarkMode = useColorScheme() === 'dark';

  //Auth.signOut();
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView>
        <HomeScreen/>
      </SafeAreaView>
    </>
  );
};

export default withAuthenticator(App);
