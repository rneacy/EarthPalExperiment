import React from 'react'
import { styles } from '../util/Styles'
import { View, Text } from 'react-native';

const NarrativeScreen = ({navigation, params}) => {
    return (
        <View style={styles.main}>
            <Text style={styles.normalText}>
                This is a narrative. It's a nice narrative.
            </Text>
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

export default NarrativeScreen;