import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../util/Styles'
import Pal from '../objects/Pal'

const MainPalScreen =  ({navigation, route}) => {
    const scenarioOrder = generateOrder();

    return (
        <View style={styles.main}>
            <Text style={[styles.normalText, {fontSize: 25}]}>Your pal score:</Text>
            <Text style={styles.normalText}>{route.params.parsedPal}</Text>
            <Text style={[styles.normalText, {fontSize: 25, paddingTop:20}]}>Your pal is: </Text>
            <Pal palScore={route.params.parsedPal} />
        </View>
    )
}

// 0 - Personal data, 1 - 3 Narratives
function generateOrder() {
    const indices = [0,1,2,3]
    shuffle(indices)
    return indices
}

// Fisher-Yates shuffle
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default MainPalScreen;