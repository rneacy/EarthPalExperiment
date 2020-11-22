import React from 'react'
import { styles } from '../util/Styles'
import { View, Text } from 'react-native';
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import { screenDelay } from '../util/etc'

const narratives = {
    0: require("../assets/narratives/0.json").text,
    1: require("../assets/narratives/1.json").text,
    2: require("../assets/narratives/2.json").text,
    3: require("../assets/narratives/3.json").text
}

const narrative_data = {
    1: 50,
    2: 30,
    3: 0
}

const NarrativeScreen = ({navigation, route}) => {
    //* narrative number will be passed into params and then this will show correct one

    // Delay their exit from the screen
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    React.useEffect( () => {
        if(buttonDisabled) {
            setTimeout(() => {setButtonDisabled(false)}, screenDelay);
        }
    })

    return (
        <View style={styles.main}>
            <Text style={styles.normalText}>
                { narratives[parseInt(route.params.order[0])] }
            </Text>

            <AwesomeButtonC137 
                stretch
                disabled={buttonDisabled} 
                style={{marginTop:30}}
                onPress = { () => {
                    //navigation.navigate("charts", { order: route.params.order, data: narrative_data[parseInt(route.params.order[0])]})
                    navigation.reset({
                        index: 0,
                        routes: [
                            { name: "charts", 
                            params: { order: route.params.order, data: route.params.order[0] === 0 ? route.params.parsedPal : narrative_data[parseInt(route.params.order[0])], surveyData: route.params.surveyData }
                            }
                        ]
                    })
                }}
            >
                Next
            </AwesomeButtonC137>
        </View>
    )
}

export default NarrativeScreen;