import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../util/Styles'
import Pal from '../objects/Pal'

const MainPalScreen =  ({navigation, route}) => {
    return (
        <View style={styles.main}>
            {/* <Text style={[styles.normalText, {fontSize: 25}]}>Your pal score:</Text>
            <Text style={styles.normalText}>{route.params.parsedPal}</Text>
            <Text style={[styles.normalText, {fontSize: 25, paddingTop:20}]}>Your pal is: </Text> */}
            <Pal palScore={route.params.parsedPal} />
        </View>
    )
}

export default MainPalScreen;