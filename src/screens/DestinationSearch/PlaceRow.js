import React, {useEffect, useState} from "react";
import {View, Text, TextInput, SafeAreaView} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles.js';

const PlaceRow =(props) =>{
    console.log(props.data);
    return(
        <View style={styles.row}>
        <View style={styles.iconContainer}>
            <Entypo name='location-pin' size={20} color={'white'}/>
        </View>

        <Text style={styles.locationText}>{props.data.description}</Text>
            
        </View>
            
    )
}

export default PlaceRow;