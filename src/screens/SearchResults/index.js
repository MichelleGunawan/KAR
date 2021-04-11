import React from "react";
import {View, Text} from "react-native";

import HomeMap from '../../components/HomeMap'
import TransportTypes from '../../components/TransportTypes';
import HomeSearch from '../../components/HomeSearch'

const SearchResults =(props) =>{
    return(
        <View>
            <HomeMap/>
            <TransportTypes/>
        </View>
    )
}

export default SearchResults;