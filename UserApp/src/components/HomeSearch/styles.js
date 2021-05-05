import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputBox:{
        backgroundColor: "#e3e3e3",
        padding: 10,
        margin:10,
        flexDirection: 'row', //line contents horizontally
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    inputText:{
        fontSize: 20,
        fontWeight: '600',
        color: '#6e6e6e',
    },
    timeContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
        width:100,
        backgroundColor: "#fff",
        borderRadius: 50
    },

    row:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    iconContainer:{
        backgroundColor: "#b3b3b3",
        padding: 10,
        borderRadius:25,
    },
    destinationText:{
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 16,
    },
});

export default styles;