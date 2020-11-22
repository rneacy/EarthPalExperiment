import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from '../util/Styles'
import Pal from '../objects/Pal'
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import { shuffle } from '../util/Funcs'
import { screenDelay } from '../util/etc'

const MainPalScreen =  ({navigation, route}) => {
    // Delay their exit from the screen
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    React.useEffect( () => {
        if(buttonDisabled) {
            setTimeout(() => {setButtonDisabled(false)}, screenDelay);
        }
    })

    const combos = {
        0: ["basic", "static"],
        1: ["basic", "anim"],
        2: ["basic", "inter"],

        3: ["medium", "static"],
        4: ["medium", "anim"],
        5: ["medium", "inter"],

        6: ["high", "static"],
        7: ["high", "anim"],
        8: ["high", "inter"],
    }
    const innerOrder = shuffle([0,1,2,3,4,5,6,7,8])

    return (
        <View style={styles.main}>
            {/* <Text style={[styles.normalText, {fontSize: 25}]}>Your pal score:</Text>
            <Text style={styles.normalText}>{route.params.parsedPal}</Text>
            <Text style={[styles.normalText, {fontSize: 25, paddingTop:20}]}>Your pal is: </Text> */}
      
            <Pal 
                palScore={route.params.parsedPal} 
                detail={"high"} //this can be "basic", "medium" or "high"
                interactivity={"inter"} //this can be "static", "anim" or "inter"
            />

            <AwesomeButtonC137
                stretch
                disabled={buttonDisabled}
                onPress = { () => {
                    navigation.reset({
                        index: 0,
                        routes: [
                            { name: "survey", params: { order: route.params.order, surveyData: route.params.surveyData, parsedPal: route.params.parsedPal, data: route.params.order[0] === 0 ? route.params.parsedPal : route.params.data }}
                        ]
                    })
                }}
                style = {{position: "absolute", top: Dimensions.get("window").height - 150}}
            >
                Next
            </AwesomeButtonC137>
        </View>
    )
}

export default MainPalScreen;