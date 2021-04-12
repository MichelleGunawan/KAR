import React from "react";
import {View, Text, Image, FlatList} from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBkqeiDhW2DiRb_tZfrueJnyJFc2LecSgY'

const RouteMap =({origin, destination}) =>{

    console.log("origin: "+ origin);
    console.log("destination "+ destination);

    const originLoc={
        latitude: 28.450627,
        longitude: -16.263045,
        // latitude: origin.type.geometry.location.lat,
        // longitude: origin.type.geometry.location.lng,
    }

    const destinationLoc={
        latitude: 28.450827,
        longitude: -16.263945,
        // latitude: destination.details.geometry.location.lat,
        // longitude: destination.details.geometry.location.lng,
    }

    return(
        <MapView
        style={{width: '100%', height: '100%'}}
        provider={ PROVIDER_GOOGLE }
        showsUserLocation={true}
        initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
        }}>     
            <MapViewDirections
            origin={originLoc}
            destination={destinationLoc}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="#9cbe85"
            /> 
            <Marker
            coordinate={originLoc}
            title={'Origin'}
            />
            <Marker
            coordinate={destinationLoc}
            title={"Destination"}
            />
        </MapView>
        
    )
}

export default RouteMap;