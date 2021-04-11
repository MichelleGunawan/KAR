import React from "react";
import {View, Text} from "react-native";

import styles from './styles';

const HomeMap =(props) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>If you find the library useful, please consider sponsoring. Things I have planned is to split up the repo into a monorepo, that would enable individual versioning of icon sets, better performance, smaller bundle and easier for the community to publish their own.</Text>
            <Text style={styles.learnMore}>Learn More</Text>
        </View>
    )
}

export default HomeMap;