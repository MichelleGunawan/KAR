import React, {useState} from "react";
import {View, Text, Dimensions, Pressable, Image} from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';

import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign"

import styles from "./styles";

const NewOrderPopup= ({newOrder, onAccept, onDecline, duration, distance}) => {
    return(
        <View style={styles.root}>
            <Pressable onPress={onDecline} style={styles.declineButton}>
                <Text style={styles.declineText}>Decline</Text>
            </Pressable>

            <Pressable onPress={onAccept} style={styles.popupContainer}>

                <View style={styles.row}>
                    <Text style={styles.transportType}>{newOrder.type}</Text>
                    
                    <View style={styles.userBg}>
                        <FontAwesome5 name={"user-alt"} color={"white"} size={35}/>
                    </View>

                    <Text style={styles.transportType}>
                        <AntDesign name={"star"} size={20}/>
                        {' '}
                        {newOrder.user.rating}
                    </Text>
                </View>

                <Text style={styles.minutes}>{duration} min</Text>
                <Text style={styles.distance}> {distance} mi</Text>
            </Pressable>
            
        </View>
    )
}

export default NewOrderPopup;