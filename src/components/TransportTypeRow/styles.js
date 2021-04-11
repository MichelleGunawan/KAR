import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,

    },
    image:{
        height:70,
        width:70,
        resizeMode:'contain',
        marginRight: 10,
    },
    middleContainer:{
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'space-between',
    },
    type:{
        fontSize: 20,
        fontWeight: 'bold',        
        marginBottom: 3,
    },
    limit:{
        fontSize: 17
    },
    time:{
        color:'#aaa'
    },
    rightContainer:{
        width: 100,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    price:{
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 5
    }
});

export default styles;