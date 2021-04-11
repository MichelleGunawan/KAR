import React, {useEffect, useState} from "react";
import {View, Text, TextInput, SafeAreaView} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles.js'

const DestinationScreen =(props) =>{
    const[originPlace, setOriginPlace] = useState(null);
    const[destinationPlace, setDestinationPlace]=useState(null)

    useEffect(()=>{
        console.warn('useEffect id called')
        if(originPlace && destinationPlace){
            console.warn('redirect to results')
        }
    },[originPlace, destinationPlace])

    return(
        <SafeAreaView>
            <View style={styles.container}>         

            <GooglePlacesAutocomplete
            placeholder="Where From?"
            styles={{textInput: styles.textInput}} 
            
            onPress={(data, details = null) => {
                setOriginPlace({data,details});
                //console.log(data, details);
            }}
            fetchDetails
            query={{
                key: 'AIzaSyBkqeiDhW2DiRb_tZfrueJnyJFc2LecSgY',
                language: 'en',
            }}
            />

            <GooglePlacesAutocomplete
            placeholder="Where To?"
            styles={{textInput: styles.textInput}} 
            
            onPress={(data, details = null) => {
                setDestinationPlace({data,details});
                //console.log(data, details);
            }}
            fetchDetails
            query={{
                key: 'AIzaSyBkqeiDhW2DiRb_tZfrueJnyJFc2LecSgY',
                language: 'en',
            }}
            />
            </View>
        </SafeAreaView>        
    )
}

export default DestinationScreen;