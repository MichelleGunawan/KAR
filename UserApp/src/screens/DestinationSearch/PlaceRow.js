import React, {useEffect, useState} from "react";
import {View, Text, TextInput, SafeAreaView} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles.js';

const PlaceRow =(props) =>{
    return(
        <View style={styles.row}>
        <View style={styles.iconContainer}>
            {props.data.description==='Home' && <Entypo name='home' size={20} color={'white'}/>}
            {props.data.description==='Work' && <MaterialCommunityIcons name='office-building' size={20} color={'white'}/>}
            {props.data.description!='Home' && props.data.description!='Work' && <Entypo name='location-pin' size={20} color={'white'}/>}
                                
        </View>

        <Text style={styles.locationText}>{props.data.description || props.data.vicinity}</Text>
            
        </View>
            
    )
}

export default PlaceRow;