import React from "react";
import {View, Text, Dimensions} from "react-native";

import RouteMap from '../../components/RouteMap'
import TransportTypes from '../../components/TransportTypes';
import HomeSearch from '../../components/HomeSearch'
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

import { useRoute, useNavigation } from '@react-navigation/native';

const SearchResults =(props) =>{
    const route = useRoute();
    const navigation = useNavigation();

    
    console.log(route.params);
    const {destinationPlace} = route.params;    
    const {originPlace} = route.params;


    return(
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
        <View style={{height: Dimensions.get('window').height - 400}}>
            <RouteMap origin={originPlace} destination={destinationPlace} />
        </View>

        <View style={{height:400}}>
            <TransportTypes/>
        </View>
        </View>
    )
}

export default SearchResults;