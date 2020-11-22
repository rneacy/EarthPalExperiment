import React from 'react';
import { View, Text, Dimensions, processColor } from 'react-native';
import { styles } from '../util/Styles';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryContainer, VictoryLabel } from "victory-native";
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import { useNavigationBuilder } from '@react-navigation/native';
import { screenDelay } from '../util/etc'

const data = [
    { name: 1, value: 15 }
];

const dataVal = 15
const red = "#FF0000"
const green = "#00FF00"
const grey = "#AAAAAA"

function calcColor(dataVal) {
    if (dataVal > -5 && dataVal < 5) {
        return grey;
    }
    else if (dataVal >= 5) {
        return red;
    }
    else {
        return green;
    }
}

const ChartDisplayScreen = ({navigation, route}) => {
    // Delay their exit from the screen
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    React.useEffect( () => {
        if(buttonDisabled) {
            setTimeout(() => {setButtonDisabled(false)}, screenDelay);
        }
    })

    const central = route.params.data - 25

    return (
        <View style={styles.main}>
            <View style={{backgroundColor: "white", borderRadius: 10}}>
                <Text style={{marginTop: 20, textAlign: "center", fontSize:20, fontWeight:"bold"}}>Good</Text>
                <VictoryChart 
                    width={Dimensions.get("window").width - 50}
                    theme={VictoryTheme.grayscale} 
                    containerComponent={<VictoryContainer responsive={false}/>}
                    domain={{y:[25,-25]}}
                >
                    <VictoryBar 
                        standalone={false} 
                        data={[{name: " ", value: central}]} 
                        x="name" 
                        y="value" 
                        barRatio={5}
                        style={{data: {fill: calcColor(central)}}}
                        labelComponent={<VictoryLabel dy={30} />}
                    />
                </VictoryChart>
                <Text style={{marginBottom: 20, textAlign: "center", fontSize:20, fontWeight:"bold"}}>Bad</Text>
                
                {/* <BarChart
                    data = {newData.data}
                    xAxis = {newData.xAxis}
                    yAxis = {newData.yAxis}
                    chartDescription = {{text: ''}}
                    legend={{enabled:false}}
                /> */}
                {/* <BarChart style={{ height: 400 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                    <Grid />
                </BarChart> */}
                {/* <PureChart data={[15]} type='bar' /> */}
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
                            { name: "mainpal", params: { order: route.params.order, parsedPal: route.params.data, surveyData: route.params.surveyData }}
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