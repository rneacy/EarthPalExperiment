import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../util/Styles'
import { FormEntry } from '../objects/Form'
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import { Email } from '../smtp'
import { shuffle } from '../util/Funcs'

const SetupScreen = ({navigation}) => {
    const [palString, setPalString] = React.useState('');
    const [parsedPal, setParsedPal] = React.useState(0);

    return (
        <View style = {[styles.home, {paddingBottom: 20}]}>
            <Text style={{textAlign: "center", padding: 5}}>Paste in the Pal Code we gave you below to start</Text>
            <FormEntry label="Pal Code" callback={setPalString}/>
            <AwesomeButtonC137
                stretch
                onPress = { () => {
                    setParsedPal(evaluate(palString));
                    navigation.navigate("mainpal", { parsedPal: parsedPal })
                }}
            >
                Generate Pal
            </AwesomeButtonC137>

            <Text style={[styles.normalText, {paddingVertical:20, color:"black"}]}>
                Test functions:
            </Text>
            <AwesomeButtonC137
                stretch
                onPress = { () => {
                    let order = shuffle([0,1,2,3]); // generates order of display
                    if (order[0] === 0) {
                        // Show personal data
                        order.shift(); //! REMOVE (DON'T REMOVE IF YOU'RE NOT ROSS)
                        navigation.navigate("narrative", { order: order })
                    }
                    else {
                        navigation.navigate("narrative", { order: order })
                    }
                }}
            >
                Test Example Study
            </AwesomeButtonC137>

            <AwesomeButtonC137
                stretch
                onPress = { () => {
                    navigation.navigate("charts");
                }}
            >
                Chart Screen
            </AwesomeButtonC137>

            <AwesomeButtonC137
                stretch
                onPress = { () => {
                    navigation.navigate("narrative", { narrative: Math.floor(Math.random() * 3 + 1)});
                }}
            >
                Random Narrative
            </AwesomeButtonC137>

            <AwesomeButtonC137
                stretch
                onPress = { () => {
                    navigation.navigate("thanks");
                }}
            >
                Thanks Screen
            </AwesomeButtonC137>

            <AwesomeButtonC137
                stretch
                onPress = { () => {
                    Email.send({
                        Host: "smtp.gmail.com",
                        Username: "earthpalinc@gmail.com",
                        Password: "PfKW499rfJkRTYa",
                        To: "earthpalinc@gmail.com",
                        From: "earthpalinc@gmail.com",
                        Subject: "EarthPal Study Results",
                        Body: "Hello!"
                    }).then (
                        message => console.log(message)
                    );
                }}
            >
                Test Email
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