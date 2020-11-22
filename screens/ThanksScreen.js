import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { styles } from '../util/Styles'
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"

const ThanksScreen = ({navigation, route}) => {
    return(
        <View style = {styles.main}>
            <Text style = {[styles.normalText, {marginBottom: 10, fontSize: 40}]}>
                Thanks for taking part.
            </Text>
            <Text style = {styles.normalText}>You've made Pal very happy.</Text>
            <Image source = {require('../assets/pal/happypal.png')} style = {{
                      width: Dimensions.get('window').width,
                      height: Dimensions.get('window').width,
                      marginLeft: -20
            }}></Image>

            <AwesomeButtonC137 
                stretch 
                onPress={() => { 
                    navigation.reset({
                        index: 0,
                        routes: [
                            { name: "setup" }
                        ]
                    })
                }}>
                    Start Again
            </AwesomeButtonC137>
        </View>
    );
}

export default ThanksScreen;