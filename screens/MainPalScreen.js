import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from '../util/Styles'
import Pal from '../objects/Pal'
//import PalF from '../objects/PalF'
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import { shuffle } from '../util/Funcs'
import { screenDelay } from '../util/etc'
import { useLinkProps } from '@react-navigation/native';

//let innerOrder = undefined

const MainPalScreen =  ({navigation, route}) => {
    // Delay their exit from the screen
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    //const [innerOrder, setInnerOrder] = React.useState([])
    React.useEffect( () => {
        console.log(route.params.data)
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

    // if (innerOrder === undefined){
    //     if(route.params.innerOrder === undefined) {
    //         innerOrder = shuffle([0,1,2,3,4,5,6,7,8])
    //         //console.log("Generated new inner order: ")
    //         console.log(innerOrder)
    //     }
    //     else {
    //         innerOrder = route.params.innerOrder
    //         console.log(innerOrder)
    //     }
    // }
    // else {
    //     console.log("Current pal: " + combos[innerOrder[0]][0] + " " + combos[innerOrder[0]][1])
    //     console.log(innerOrder)
    // }

    return (
        <View style={styles.main}>      
            <Pal 
                palScore={route.params.data} 
                detail={combos[route.params.innerOrder[0]][0]} //this can be "basic", "medium" or "high"
                interactivity={combos[route.params.innerOrder[0]][1]} //this can be "static", "anim" or "inter"
            />

            <AwesomeButtonC137
                stretch
                disabled={buttonDisabled}
                onPress = { () => {
                    let combo = route.params.innerOrder[0];
                    let newInnerOrder = route.params.innerOrder;
                    newInnerOrder.shift();
                    navigation.reset({
                        index: 0,
                        routes: [
                            {   name: "survey", 
                                params: { 
                                    order: route.params.order, 
                                    surveyData: route.params.surveyData, 
                                    parsedPal: route.params.parsedPal, 
                                    data: route.params.order[0] === 0 ? 
                                        route.params.parsedPal : route.params.data,
                                    innerOrder: newInnerOrder,
                                    combo: combo
                                }
                            }
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