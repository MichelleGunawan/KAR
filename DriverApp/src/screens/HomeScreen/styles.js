import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bottomContainer:{
        height: 75,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    bottomText:{
        fontSize: 22,
        color: '#a4a4a4',
        
    },
    roundButton:{
        position:'absolute',
        backgroundColor:'white',
        padding: 10,
        borderRadius: 50,

    },
    goButton:{
        position:'absolute',
        backgroundColor:'#9cbe85',
        height: 75,
        width:75,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 100,
        left: Dimensions.get('window').width /2 - 37,

    },
    goText:{
        color: 'white',
        fontSize: 25,
        fontWeight: "bold",
    },
    balanceButton:{
        position:'absolute',
        backgroundColor:'#a4a4a4',
        height: 50,
        width:100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        left: Dimensions.get('window').width /2 - 50,
    },
    balanceText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

});

export default styles;
