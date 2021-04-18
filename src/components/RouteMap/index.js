import React from "react";
import {View, Text, Image, FlatList} from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBkqeiDhW2DiRb_tZfrueJnyJFc2LecSgY'

const RouteMap =({origin, destination}) =>{

    console.log("origin")
    console.log(origin);
    console.log("destination")
    console.log(destination);

    console.log("origin lat")
    console.log(origin.details.geometry.location.lat)
    console.log("origin lng")
    console.log(origin.details.geometry.location.lng)
    
    const originLoc=
    {
        // latitude: 28.450627,
        // longitude: -16.263045,
        // latitude: 33.4936391,
        // longitude: -117.1483648,
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
    }

    const destinationLoc={
        // latitude: 28.450827,
        // longitude: -16.263945,
        // latitude: 33.5539143,
        // longitude: -117.2139232,
        latitude: destination.lat,
        longitude: destination.lng,
    }

    return(
        <MapView
        style={{width: '100%', height: '100%'}}
        provider={ PROVIDER_GOOGLE }
        showsUserLocation={true}
        initialRegion={{
            latitude: originLoc.latitude,
            longitude: originLoc.longitude,
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
            pinColor={"tan"}
            />
            <Marker
            coordinate={destinationLoc}
            title={"Destination"}
            pinColor={"tan"}
            />
        </MapView>
        
    )
}

export default RouteMap;