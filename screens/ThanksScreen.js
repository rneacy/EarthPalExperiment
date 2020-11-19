import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../util/Styles'

const ThanksScreen = ({navigation, route}) => {
    return(
        <View style = {styles.main}>
            <Text style = {[styles.normalText, {marginBottom: 10, fontSize: 40}]}>
                Thanks for taking part.
            </Text>
            <Text style = {styles.normalText}>You've made Pal very happy.</Text>
            <Image source = {require('../assets/pal/happypal.png')}></Image>
        </View>
    );
}

export default ThanksScreen;