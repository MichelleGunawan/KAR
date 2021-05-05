import React, {useState} from "react";
import {View, Text, Dimensions, Alert} from "react-native";

import RouteMap from '../../components/RouteMap'
import TransportTypes from '../../components/TransportTypes';
import HomeSearch from '../../components/HomeSearch'
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import{API, graphqlOperation, Auth} from 'aws-amplify';
import{createOrder} from '../../graphql/mutations';

import { useRoute, useNavigation } from '@react-navigation/native';

const SearchResults =(props) =>{
    const typeState = useState(null);

    const route = useRoute();
    const navigation = useNavigation();

    
    console.log(route.params);
    const {destinationPlace} = route.params;    
    const {originPlace} = route.params;

    const onSubmit = async() =>{
        const[type]=typeState;
        if(!type){
            return;
        }

        //submit to server
        try{
            const userInfo = await Auth.currentAuthenticatedUser();
            console.log(userInfo);
            console.log(originPlace)
            console.log(destinationPlace);

            const date = new Date();
            
            const input = {
                createdAt: date.toISOString(),
                type,
                originLatitude: originPlace.details.geometry.location.lat,
                originLongitude: originPlace.details.geometry.location.lng,
                
                destLatitude: destinationPlace.lat,
                destLongitude: destinationPlace.lng,

                userId: userInfo.attributes.sub,
                carId: "1",
            };

            const response = await API.graphql(
                graphqlOperation(
                    createOrder,{
                        input
                    }
                )
            );

            console.log(response);
            Alert.alert("Hurraay", "Your order has been placed!",[{text:"Go home", onPress:() => navigation.navigate('Home')}])
        }
        catch(e){
            console.error(e);
        }
    }

    return(
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
        <View style={{height: Dimensions.get('window').height - 400}}>
            <RouteMap origin={originPlace} destination={destinationPlace} />
        </View>

        <View style={{height:400}}>
            <TransportTypes typeState={typeState} onSubmit={onSubmit}/>
        </View>
        </View>
    )
}

export default SearchResults;