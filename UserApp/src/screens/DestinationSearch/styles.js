import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        padding: 10,
        height: '100%',
    },
    textInput:{
        padding: 10,
        backgroundColor: "#ddd",
        marginVertical: 5,
        marginLeft: 25
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    iconContainer:{
        backgroundColor: '#9cbe85',
        borderRadius: 50,
        padding: 5,
        marginRight: 15,

    },
    locationText:{

    },
    listView:{
        position:'absolute',
        top: 112,

    },
    autocompleteContainer:{
        position: 'absolute',
        top:10,
        left: 10,
        right: 10
    },

    circle:{
        backgroundColor:'#9cbe85',
        width: 10,
        height: 10,
        position: 'absolute',
        top: 32,
        left:12,
        borderRadius: 50
    },
    line:{
        backgroundColor:'#9cbe85',
        width: 1,
        height: 60,
        position: 'absolute',
        top: 32,
        left:16,
    },
    square:{
        backgroundColor:'#9cbe85',
        width: 10,
        height: 10,
        position: 'absolute',
        top: 92,
        left:12,

    },

});

export default styles;