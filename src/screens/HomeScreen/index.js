import React from "react";
import {View, Text, Dimensions} from "react-native";

import HomeMap from '../../components/HomeMap'
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch'

const HomeScreen =(props) =>{
    return(
        <View>
            <View style = {{height: Dimensions.get('window').height - 400}}>
                <HomeMap />
            </View>
            
            <View style = {{height: 400}}>
                <CovidMessage/>
                <HomeSearch/>
            </View>
            
        </View>
    )
}

export default HomeScreen;
