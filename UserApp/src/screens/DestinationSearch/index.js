import React, {useEffect, useState} from "react";
import {View, Text, TextInput, SafeAreaView} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';

import styles from './styles.js';
import PlaceRow from'./PlaceRow';


const homePlace = {
description: 'Home',
geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
description: 'Work',
geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};
  

const DestinationScreen =(props) =>{
    const[originPlace, setOriginPlace] = useState(null);
    const[destinationPlace, setDestinationPlace]=useState(null)

    const navigation = useNavigation();

    const checkNavigation = () => {
        if(originPlace && destinationPlace){
            navigation.navigate('SearchResults',{originPlace,destinationPlace,});
        }
    }

    useEffect(() => {
        checkNavigation();
      }, [originPlace, destinationPlace]);

    return(
        <SafeAreaView>
            <View style={styles.container}>         

            <GooglePlacesAutocomplete
            placeholder="Where From?"
            onPress={(data, details = null) => {
                setOriginPlace({data, details});
            }}

            suppressDefaultStyles
            styles={{
                textInput: styles.textInput,
                container:styles.autocompleteContainer,
                listView:styles.listView
                
            }} 
            enablePoweredByContainer={false}
            
            fetchDetails={true}
            query={{
                key: 'AIzaSyBkqeiDhW2DiRb_tZfrueJnyJFc2LecSgY',
                language: 'en',
            }}
            
            currentLocation={true}
            currentLocationLabel='Current location'
            
            renderRow={(data) => <PlaceRow data={data}/>}
            renderDescription={(data) => data.description || data.vicinity}
            predefinedPlaces={[homePlace,workPlace]}
            />

            <GooglePlacesAutocomplete
            placeholder="Where To?"
            onPress={(data, details = null) => {
                setDestinationPlace(details.geometry.location);
            }}

            suppressDefaultStyles
            styles={{
                textInput: styles.textInput,
                container:{
                    ...styles.autocompleteContainer,
                    top:65,
                },
            }}             
            enablePoweredByContainer={false}

            fetchDetails={true}
            query={{
                key: 'AIzaSyBkqeiDhW2DiRb_tZfrueJnyJFc2LecSgY',
                language: 'en',
            }}
            
            currentLocation={true}
            currentLocationLabel='Current location'
            renderRow={(data) => <PlaceRow data={data}/>}
            renderDescription={(data) => data.description || data.vicinity}
            predefinedPlaces={[homePlace,workPlace]}
           />

            {/* cicle */}
            <View style={styles.circle}/>
            {/* line */}
            <View style={styles.line}/>
            {/* square */}
            <View style={styles.square}/>

            </View>
        </SafeAreaView>        
    )
}

export default DestinationScreen;