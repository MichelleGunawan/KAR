import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        position:'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: '#00000088'
    },
    popupContainer:{
        backgroundColor: '#a4a4a4',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 250
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    transportType:{
        color: 'white',
        fontSize: 20,
        marginHorizontal: 10,
    },
    minutes:{
        color: 'white',
        fontSize: 35,
    },
    distance:{
        color: 'white',
        fontSize: 25,
    },
    userBg:{
        backgroundColor: "#9bce85",
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
    },
    declineButton:{
        backgroundColor: "#a4a4a4",
        padding: 15,
        borderRadius: 50,
        width: 100,
        alignItems: 'center',
    },
    declineText:{
        color: 'white',
        fontWeight: '100',
        fontSize: 15
    },
});

export default styles;
