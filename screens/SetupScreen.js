import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../util/Styles'
import { FormEntry } from '../objects/Form'
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import { shuffle, email } from '../util/Funcs'

let otherPalString = "";
let setOtherPalString = (text) => { otherPalString = text; }
let otherParsedPal = 0;
let setOtherParsedPal = (val) => { otherParsedPal = val; }

let userName = ""
let setUserName = (text) => { userName = text; }

const SetupScreen = ({navigation}) => {
    const [palString, setPalString] = React.useState('');
    const [parsedPal, setParsedPal] = React.useState(0);

    return (
        <View style = {[styles.home, {paddingBottom: 20}]}>
            <Text style={{textAlign: "center", padding: 5, marginTop: 20}}>Please tell us your name</Text>
            <FormEntry label="Name" callback={setUserName}/>

            <Text style={{textAlign: "center", padding: 5, marginTop: 20}}>Paste in the Pal Code we gave you below to start</Text>
            <FormEntry label="Pal Code" callback={setOtherPalString}/>
            <AwesomeButtonC137
                stretch
                onPress = { () => {
                    let order = shuffle([0,1,2,3])
                    setOtherParsedPal(evaluate(otherPalString));
                    navigation.reset({
                        index: 0,
                        routes: [
                            { name: "narrative", params: { order: order, parsedPal: otherParsedPal, surveyData: {name: userName, palcode: otherParsedPal, questionnaire: otherPalString, data:[]} }}
                        ]
                    });
                }}
            >
                Start Study
            </AwesomeButtonC137>
        </View>
    );
}

//* Parses user's pal string generated from their initial questionnaire.
function evaluate(palString) {
    let sep = palString.trim().split(":");
    let numQs = 10;

    sep = sep.slice(0, 10);
    return sep.reduce((t, c) => { return t+parseInt(c) }, 0)
}

//* Generate order of the study for randomisation
//* The order will be passed with an index into each screen
//* Once at the survey screen, submitting loads next one if index+1 < 4
//* Otherwise, it will load the conclusion screen
// 0 - Personal data, 1 - 3 Narratives
function generateOrder() {
    const indices = [0,1,2,3]
    shuffle(indices)
    return indices
}

export default SetupScreen;