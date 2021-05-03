import React, {useState} from "react";
import {View, Text, Dimensions, Pressable} from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import NewOrderPopup from "../../components/NewOrderPopup"

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
GOOGLE_MAPS_APIKEY = 'AIzaSyBkqeiDhW2DiRb_tZfrueJnyJFc2LecSgY';

const HomeScreen = (props) => {
    const[isOnline, setIsOnline] = useState(false);

    const onGoPress =() => {
        setIsOnline(!isOnline);
    }

    return(
        <View >
            <MapView
            style={{width:'100%', height:Dimensions.get('window').height-75}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
            latitude: 28.450627,
            longitude: -16.263045,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
            }}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="#9cbe85"
            />
        </MapView>

        <Pressable onPress={()=>console.warn("Balance")} style={styles.balanceButton}>
            <Text style={styles.balanceText}>
                <Text style={{color:"#9cbe85"}}>$</Text>{''} 0.00
            </Text>
        </Pressable>

        <Pressable onPress={()=>console.warn("Hi")} style={[styles.roundButton,{top:10, left: 10}]}>
            <Entypo name={"menu"} size={24} color="#a4a4a4"/>
        </Pressable>

        <Pressable onPress={()=>console.warn("Hi")} style={[styles.roundButton,{top:10, right: 10}]}>
            <FontAwesome5 name={"search"} size={20} color="#a4a4a4"/>
        </Pressable>

        <Pressable onPress={()=>console.warn("Hi")} style={[styles.roundButton,{bottom:100, left: 10}]}>
            <Entypo name={"menu"} size={24} color="#a4a4a4"/>
        </Pressable>

        <Pressable onPress={()=>console.warn("Hi")} style={[styles.roundButton,{bottom:100, right: 10}]}>
            <Entypo name={"menu"} size={24} color="#a4a4a4"/>
        </Pressable>

        <Pressable onPress={onGoPress} style={styles.goButton}>
            <Text style={styles.goText}>
                {isOnline ?'END':'GO'}
            </Text>
        </Pressable>

        <View style={styles.bottomContainer}>
            <Ionicons name={"options"} size={24} color="#a4a4a4" style={{left:20}}/>
            {
                isOnline
                ?<Text style={styles.bottomText}>You're online</Text>
                :<Text style={styles.bottomText}>You're offline</Text>
            }
            
            <Entypo name={"menu"} size={24} color="#a4a4a4" style={{right:20}}/>
        </View>

        <NewOrderPopup/>
        </View>
    )
}

export default HomeScreen;