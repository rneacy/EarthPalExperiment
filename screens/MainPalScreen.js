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
            <Pal palScore={route.params.parsedPal} />

            <AwesomeButtonC137
                stretch
                disabled={buttonDisabled}
                onPress = { () => {
                    //! REMOVE THIS WHEN SURVEY SCREEN AVAILABLE/PERMUTATIONS IMPLEMENTED!!!
                    let newOrder = route.params.order;
                    newOrder.shift() 
                    if(newOrder[0] === 0) newOrder.shift() //bypass personal data for now
                    if(newOrder.length >= 1){
                        //navigation.navigate("narrative", { order: newOrder })
                        navigation.reset({
                            index: 0,
                            routes: [
                                { name: "narrative", params: { order: newOrder }}
                            ]
                        })
                    }
                    else {
                        navigation.reset({
                            index: 0,
                            routes: [
                                { name: "thanks" }
                            ]
                        })
                    }
                }}
                style = {{position: "absolute", top: Dimensions.get("window").height - 150}}
            >
                Next
            </AwesomeButtonC137>
        </View>
    )
}

export default MainPalScreen;