import React from "react";
import {View, Text, Image, FlatList} from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

import cars from '../../assets/data/cars';

const HomeMap =(props) =>{

    const getImage = (type) => {
        if(type==='Kar')
        {
            return require('../../assets/images/top-kar.png')
        }
        if(type==='KarS')
        {
            return require('../../assets/images/top-karS.png')
        }
        if(type=="KarX")
        {
            return require('../../assets/images/top-karX.png')
        }
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
            
         {cars.map((car)=>(
             <Marker key={car.id} coordinate={{ latitude : car.latitude,  longitude : car.longitude, }}>

             <Image 
             style={
                {width:50, height: 50, 
                resizeMode: 'contain',
                transform:[{
                    rotate:`${car.heading}deg`
                }]
                }} 
             source={getImage(car.type)}
             />
 
             </Marker>
         ))}          
                
        </MapView>
        
    )
}

export default HomeMap;