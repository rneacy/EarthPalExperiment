import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from '../util/Styles';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];

const ChartDisplayScreen = ({navigation, params}) => {
    return (
        <View style={styles.main}>
            <View style={{backgroundColor: "white", borderRadius: 10}}>
                <VictoryChart width={Dimensions.get("window").width - 50} theme={VictoryTheme.material}>
                    <VictoryBar data={data} x="quarter" y="earnings" alignment="start" barRatio={0.8}/>
                </VictoryChart>
            </View>

            <AwesomeButtonC137 stretch style={{marginTop:30}}>Next</AwesomeButtonC137>
        </View>
    );
}

export default ChartDisplayScreen;