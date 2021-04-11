import React from "react";
import {View, Text, Image, FlatList} from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBkqeiDhW2DiRb_tZfrueJnyJFc2LecSgY'

const RouteMap =(props) =>{

    const origin={
        latitude: 28.450627,
        longitude: -16.263045,
    }

    const destination={
        latitude: 28.450127,
        longitude: -16.269045,
    }

    return(
        <MapView
        style={{width: '100%', height: '100%'}}
        provider={ PROVIDER_GOOGLE }
        initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
        }}>     
               <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
            /> 
        </MapView>
        
    )
}

export default RouteMap;