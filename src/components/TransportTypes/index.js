import React from "react";
import {View, Text, Pressable} from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign';
import TransportTypeRow from '../TransportTypeRow'

import types from '../../assets/data/types';

const TransportTypes =(props) =>{
    const confirm = () => {
        console.ward('confirm');
    };

    return(
        <View>
            {types.map(type => <TransportTypeRow type={type} key={type.id}/>)}
            
            <Pressable 
            onPress={confirm} 
            style={{backgroundColor:'#9cbe85', padding: 10, margin: 10, alignItems:'center'}}>
                <Text style={{color:"white", fontWeight: 'bold'}}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    )
}

export default TransportTypes;