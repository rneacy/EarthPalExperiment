import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../util/Styles'
import { FormEntry } from '../objects/Form'
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"

const SetupScreen = ({navigation}) => {
    const [palString, setPalString] = React.useState('');

    return (
        <View style = {[styles.home, {paddingTop: 20}]}>
            <FormEntry label="Pal Code:" callback={setPalString} />
            <AwesomeButtonC137
                stretch
            >
                Generate Pal
            </AwesomeButtonC137>
        </View>
    );
}

export default SetupScreen;