import React, {useEffect, useState} from "react";
import {View, Text, TextInput, SafeAreaView} from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles.js';
import PlaceRow from'./PlaceRow';

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
            suppressDefaultStyles
            styles={{
                textInput: styles.textInput,
                container:styles.autocompleteContainer,
                listView:styles.listView
                
            }} 
            
            onPress={(data, details = null) => {
                setOriginPlace({data,details});
                //console.log(data, details);
            }}
            fetchDetails
            query={{
                key: 'AIzaSyBkqeiDhW2DiRb_tZfrueJnyJFc2LecSgY',
                language: 'en',
            }}
            enablePoweredByContainer={false}
            renderRow={(data) => <PlaceRow data={data}/>}
            />

            <GooglePlacesAutocomplete
            placeholder="Where To?"
            suppressDefaultStyles
            styles={{
                textInput: styles.textInput,
                container:{
                    ...styles.autocompleteContainer,
                    top:65,
                },
            }}             
            onPress={(data, details = null) => {
                setDestinationPlace({data,details});
                //console.log(data, details);
            }}
            fetchDetails
            query={{
                key: 'AIzaSyBkqeiDhW2DiRb_tZfrueJnyJFc2LecSgY',
                language: 'en',
            }}
            enablePoweredByContainer={false}
            renderRow={(data) => <PlaceRow data={data}/>}
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