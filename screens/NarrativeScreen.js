import React from 'react'
import { styles } from '../util/Styles'
import { View, Text } from 'react-native';
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"

const narratives = {
    1: require("../assets/narratives/1.json").text,
    2: require("../assets/narratives/2.json").text,
    3: require("../assets/narratives/3.json").text
}

const NarrativeScreen = ({navigation, route}) => {
    //* narrative number will be passed into params and then this will show correct one

    return (
        <View style={styles.main}>
            <Text style={styles.normalText}>
                { narratives[parseInt(route.params.narrative)] }
            </Text>

            <AwesomeButtonC137 stretch style={{marginTop:30}}>Next</AwesomeButtonC137>
        </View>
    )
}

export default NarrativeScreen;