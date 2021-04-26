import React from "react";
import {View, Image, Text, Pressable} from "react-native";

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';


const TransportTypeRow =(props) =>{
    console.log(props);
    const{type, onPress, isSelected} = props;

    const getImage = () => {
        if(type.type==='Kar')
        {
            return require('../../assets/images/kar.png')
        }
        if(type.type==='KarS')
        {
            return require('../../assets/images/karS.png')
        }
        if(type.type=="KarX")
        {
            return require('../../assets/images/karX.png')
        }
    }

    return(
        <Pressable 
        onPress={onPress} 
        style={[styles.container, {backgroundColor: isSelected?'#efefef':'#fff'}]}
        >
            <Image 
            style={styles.image} 
            source={getImage()}
            />
            
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type} {' '}
                    <Feather name={'package'} size={17}/>
                    <Text style={styles.limit}>{type.limit}</Text>
                </Text>
                <Text style={styles.time}>
                    8:00PM drop off
                </Text>
            </View>

            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={18} color={'#99d962'}/>
                <Text style={styles.price}>est. ${type.price}</Text>
            </View>
        </Pressable>
    )
}

export default TransportTypeRow;