import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from '../util/Styles'
import Pal from '../objects/Pal'
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"

const MainPalScreen =  ({navigation, route}) => {
    return (
        <View style={styles.main}>
            {/* <Text style={[styles.normalText, {fontSize: 25}]}>Your pal score:</Text>
            <Text style={styles.normalText}>{route.params.parsedPal}</Text>
            <Text style={[styles.normalText, {fontSize: 25, paddingTop:20}]}>Your pal is: </Text> */}
            <Pal palScore={route.params.parsedPal} />

            <AwesomeButtonC137
                stretch
                onPress = { () => {
                    
                }}
                style = {{position: "absolute", top: Dimensions.get("window").height - 150}}
            >
                Next
            </AwesomeButtonC137>
        </View>
    )
}

export default MainPalScreen;