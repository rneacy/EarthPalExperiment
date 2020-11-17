import React from 'react';
import { Text } from 'react-native'
import { styles } from '../util/Styles'

const valences = {0: "Happy", 1: "Neutral", 2: "Sad"};
const bestScore = 50;

const Pal = (props) => {
    let valenceIndex = Math.floor(((10 * (props.palScore / bestScore)) / 3) - 1)
    if (valenceIndex < 0) valenceIndex = 0

    return (
        <Text style = {styles.normalText}>{ valences[valenceIndex] }</Text>
    )
}

export default Pal;