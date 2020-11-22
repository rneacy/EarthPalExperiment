import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from '../util/Styles';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import { useNavigationBuilder } from '@react-navigation/native';
import { screenDelay } from '../util/etc'

const data = [
    { name: 1, value: 15 }
];

const ChartDisplayScreen = ({navigation, route}) => {
    // Delay their exit from the screen
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    React.useEffect( () => {
        if(buttonDisabled) {
            setTimeout(() => {setButtonDisabled(false)}, screenDelay);
        }
    })

    return (
        <View style={styles.main}>
            <View style={{backgroundColor: "white", borderRadius: 10}}>
                <VictoryChart width={Dimensions.get("window").width - 50} theme={VictoryTheme.grayscale}>
                    <VictoryBar data={[{name: 1, value: route.params.data}]} x="name" y="value" alignment="start" barRatio={0.8}/>
                </VictoryChart>
            </View>

            <AwesomeButtonC137 
                stretch 
                disabled={buttonDisabled}
                style={{marginTop:30}}
                onPress = { () => {
                    //navigation.navigate("mainpal", { order: route.params.order, parsedPal: route.params.data })
                    navigation.reset({
                        index: 0,
                        routes: [
                            { name: "mainpal", params: { order: route.params.order, parsedPal: route.params.data }}
                        ]
                    })
                }}
            >
                Next
            </AwesomeButtonC137>
        </View>
    );
}

export default ChartDisplayScreen;