import React from 'react';
import { Text, Image, Dimensions, View } from 'react-native'
import { styles } from '../util/Styles'

const valences = {0: "Happy", 1: "Neutral", 2: "Sad"};
const bestScore = 50;

const BaseImages = {
    2: {
        "globe": require("../assets/pal/globe/globe0100.png"),
        "eyes": require("../assets/pal/eyes/eyes-saddest.png"),
        "mouth": require("../assets/pal/mouth/sad/sad-mouth-static.png")
    },
    1: {
        "globe": require("../assets/pal/globe/globe0050.png"),
        "eyes": require("../assets/pal/eyes/eyes-meh.png"),
        "mouth": require("../assets/pal/mouth/meh/meh-mouth-static.png")
    },
    0: {
        "globe": require("../assets/pal/globe/globe0001.png"),
        "eyes": require("../assets/pal/eyes/eyes-happy.png"),
        "mouth": require("../assets/pal/mouth/happy/happy-mouth-static.png")
    }
}

const Pal = (props) => {
    let valenceIndex = Math.floor(((10 * (props.palScore / bestScore)) / 3) - 1)
    if (valenceIndex < 0 || valenceIndex === NaN) valenceIndex = 0

    let interactivity = "basic"

    if (props.interactivity !== "undefined"){
        interactivity = props.interactivity;
    }

    return (
        <>
            <Image
                source={BaseImages[valenceIndex]["globe"]}
                style={{width: Dimensions.get('window').width, 
                height: Dimensions.get('window').width  , position: "absolute"}}
            > 
            </Image>
            <Image
                source={BaseImages[valenceIndex]["eyes"]}
                style={{width: Dimensions.get('window').width, 
                height: Dimensions.get('window').width  , position: "absolute"}}
            >
            </Image>
            <Image
                source={BaseImages[valenceIndex]["mouth"]}
                style={{width: Dimensions.get('window').width, 
                height: Dimensions.get('window').width  , position: "absolute"}}
            >
            </Image> 
        </>
    )
}

export default Pal;