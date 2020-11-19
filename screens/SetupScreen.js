import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../util/Styles'
import { FormEntry } from '../objects/Form'
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import { Email } from '../smtp'

const SetupScreen = ({navigation}) => {
    const [palString, setPalString] = React.useState('');
    const [parsedPal, setParsedPal] = React.useState(0);

    return (
        <View style = {[styles.home, {paddingTop: 20}]}>
            <Text>Paste in the Pal Code we gave you below to start</Text>
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

export default SetupScreen;