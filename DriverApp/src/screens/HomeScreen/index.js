import React, {useState, useEffect} from "react";
import {View, Text, Dimensions, Pressable} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import NewOrderPopup from "../../components/NewOrderPopup"

const origin = {latitude: 28.453327, longitude: -16.263045};
const destination = {latitude: 28.452927, longitude: -16.260845};
GOOGLE_MAPS_APIKEY = 'AIzaSyBkqeiDhW2DiRb_tZfrueJnyJFc2LecSgY';

import {Auth, API, graphqlOperation} from 'aws-amplify';
import {getCar, listOrders} from '../../graphql/queries';
import {updateCar} from '../../graphql/mutations';

const HomeScreen = (props) => {
    const [car, setCar] = useState(null);
    const [myPosition, setMyPosition] = useState(null);
    const [order, setOrder] = useState(null);
    const [newOrder, setNewOrder] = useState({
        id: '1',
        type: 'KarX',
    
        originLatitude: 28.453327,
        originLongitude: -16.263045,
    
        destLatitude: 28.452927,
        destLongitude: -16.260845,
    
        user: {
          rating: 4.8,
          name: 'Ciara',
        }
      })

      const fetchCar = async () => {
        try {
          const userData = await Auth.currentAuthenticatedUser();
          const carData = await API.graphql(
            graphqlOperation(getCar, { id: userData.attributes.sub }),
          );
          setCar(carData.data.getCar);
        } catch (e) {
          console.error(e);
        }
      }
    
      const fetchOrders = async () => {
        try {
            const ordersData = await API.graphql(
              graphqlOperation(
                listOrders,
                { filter: { status: { eq: 'NEW'}}}
                )
            );
            setNewOrders(ordersData.data.listOrders.items);
        } catch (e) {
          console.log(e);
        }
      }
    
      useEffect(() => {
        fetchCar();
        fetchOrders();
      }, []);

    const onDecline = () => {
    setNewOrder(null);
    }

    const onAccept = (newOrder) => {
        setOrder(newOrder);
        setNewOrder(null);
      }

    // const onGoPress =() => {
    //     setIsOnline(!isOnline);
    // }

    const onGoPress = async () => {
        // Update the car and set it to active
        try {
          const userData = await Auth.currentAuthenticatedUser();
          const input = {
            id: userData.attributes.sub,
            isActive: !car.isActive,
          }
          const updatedCarData = await API.graphql(
            graphqlOperation(updateCar, { input })
          )

          console.log(updatedCarData);
          setCar(updatedCarData.data.updateCar);
        } catch (e) {
          console.error(e);
        }
      }

    const onUserLocationChange = (event) => {
        setMyPosition(event.nativeEvent.coordinate);
      }

    const onDirectionFound = (event) => {
    console.log("Direction found: ", event);
    if (order) {
        setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        pickedUp: order.pickedUp || event.distance < 0.2,
        isFinished: order.pickedUp && event.distance < 0.2,
        })
    }
    }

    const getOrigin = () => {
        return {
          latitude: order.originLatitude,
          longitude: order.originLongitude,
        }
      }

    const getDestination = () => {
        if (order && order.pickedUp) {
          return {
            latitude: order.destLatitude,
            longitude: order.destLongitude,
          }
        }
        return {
          latitude: order.originLatitude,
          longitude: order.originLongitude,
        }
      }

    const renderBottomTitle = () => {
        if (order && order.isFinished) {
          return (
            <View style={{ alignItems: 'center' }}>
              <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center', backgroundColor: '#9cbe55', width: 200, padding: 10, borderRadius: 5}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>COMPLETE {order.type}</Text>
              </View>
              <Text style={styles.bottomText}>{order.user.name}</Text>
            </View>
          )
        }
    
        if (order && order.pickedUp) {
          return (
            <View style={{ alignItems: 'center' }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
                <View style={{ backgroundColor: '#4bb4bf', marginHorizontal: 10, width: 30, height: 30, alignItems:'center', justifyContent: 'center', borderRadius: 20}}>
                  <FontAwesome5 name={"user-alt"} color={"white"} size={20} />
                </View>
                <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
              </View>
              <Text style={styles.bottomText}>Dropping off {order.user.name}</Text>
            </View>
          )
        }
    
        if (order) {
          return (
            <View style={{ alignItems: 'center' }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
                <View style={{ backgroundColor: '#eeaa00', marginHorizontal: 10, width: 30, height: 30, alignItems:'center', justifyContent: 'center', borderRadius: 20}}>
                  <FontAwesome5 name={"user-alt"} color={"white"} size={20} />
                </View>
                <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
              </View>
              <Text style={styles.bottomText}>Picking up {order.user.name}</Text>
            </View>
          )
        }
        if (car?.isActive) {
          return (
            <Text style={styles.bottomText}>You're online</Text>
          )
        }
        return (<Text style={styles.bottomText}>You're offline</Text>);
      }

    return(
        <View >
            <MapView
            style={{width:'100%', height:Dimensions.get('window').height-90}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            onUserLocationChange={onUserLocationChange}
            initialRegion={{
            latitude: 28.450627,
            longitude: -16.263045,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
            }}
        >
            {order && (
            <MapViewDirections
            origin={myPosition} //origin
            onReady={onDirectionFound}
            destination={getDestination()}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="#9cbe85"
            />
            )}

            {order && <Marker
            coordinate={getOrigin()}
            title={"Origin"}
            pinColor={"tan"}
            />
            }
            
            {order && <Marker
            coordinate={getDestination()}
            title={"Destination"}
            pinColor={"tan"}
            />
            }
            
        </MapView>

        <Pressable onPress={()=>console.warn("Balance")} style={styles.balanceButton}>
            <Text style={styles.balanceText}>
                <Text style={{color:"#9cbe55"}}>$</Text>{''} 0.00
            </Text>
        </Pressable>

        <Pressable onPress={()=>console.warn("Hi")} style={[styles.roundButton,{top:10, left: 10}]}>
            <Entypo name={"menu"} size={24} color="#a4a4a4"/>
        </Pressable>

        <Pressable onPress={()=>console.warn("Hi")} style={[styles.roundButton,{top:10, right: 10}]}>
            <FontAwesome5 name={"search"} size={20} color="#a4a4a4"/>
        </Pressable>

        <Pressable onPress={()=>console.warn("Hi")} style={[styles.roundButton,{bottom:100, left: 10}]}>
            <Entypo name={"menu"} size={24} color="#a4a4a4"/>
        </Pressable>

        <Pressable onPress={()=>console.warn("Hi")} style={[styles.roundButton,{bottom:100, right: 10}]}>
            <Entypo name={"menu"} size={24} color="#a4a4a4"/>
        </Pressable>

        <Pressable onPress={onGoPress} style={styles.goButton}>
            <Text style={styles.goText}>
                {car?.isActive ?'END':'GO'}
            </Text>
        </Pressable>

        <View style={styles.bottomContainer}>
            <Ionicons name={"options"} size={24} color="#a4a4a4" style={{left:20}}/>
            {
                renderBottomTitle()
            }
            
            <Entypo name={"menu"} size={24} color="#a4a4a4" style={{right:20}}/>
        </View>

        {newOrder && <NewOrderPopup 
        newOrder={newOrder}
        duration={2}
        distance={0.5}
        onDecline={onDecline}
        onAccept={()=>onAccept(newOrder)}
        />}
        </View>
    )
}

export default HomeScreen;