import React, {useState, useEffect} from "react";
import {View, Text, Image} from "react-native";

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

import {API, graphqlOperation} from 'aws-amplify';
import {listCars} from '../../graphql/queries';

//import cars from '../../assets/data/cars';

const HomeMap =(props) =>{
    const[cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
              const response = await API.graphql(
                graphqlOperation(
                  listCars
                )
              )
      
              setCars(response.data.listCars.items);
            } catch (e) {
              console.error(e);
            }
          };
      
          fetchCars();
        }, [])

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
        showUserLocation={true}
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