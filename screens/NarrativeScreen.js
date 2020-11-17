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

export default NarrativeScreen;