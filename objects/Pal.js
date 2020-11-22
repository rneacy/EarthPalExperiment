import React from 'react';
import { View, Image, Dimensions } from 'react-native'
import { styles } from '../util/Styles'
import Feature from '../objects/Feature'
import Idle from '../objects/Idle'
import Poke from '../objects/Poke'
import Tear from '../objects/Tear'
import {TouchableWithoutFeedback } from 'react-native-gesture-handler';

const valences = {0: "Happy", 1: "Neutral", 2: "Sad"};
const bestScore = 50;
let valenceIndex = 0;

const BaseImages = {
    5: {
        "globe": require("../assets/newPal/globe/globe-sad.png"),
        "eyes": require("../assets/newPal/eyes/eyes-sad-2.png"),
        "mouth": require("../assets/newPal/mouth/mouth-sad-2.png"),
    },
    4: {
        "globe": require("../assets/newPal/globe/globe-neutral.png"),
        "eyes": require("../assets/newPal/eyes/eyes-neutral-2.png"),
        "mouth": require("../assets/newPal/mouth/mouth-neutral-2.png"),
    },
    3: {
        "globe": require("../assets/newPal/globe/globe-happy.png"),
        "eyes": require("../assets/newPal/eyes/eyes-happy-2.png"),
        "mouth": require("../assets/newPal/mouth/mouth-happy-2.png"),
    },
    2: {
        "globe": require("../assets/newPal/globe/globe-sad.png"),
        "eyes": require("../assets/newPal/eyes/eyes-sad-1.png"),
        "mouth": require("../assets/newPal/mouth/mouth-sad-1.png"),
    },
    1: {
        "globe": require("../assets/newPal/globe/globe-neutral.png"),
        "eyes": require("../assets/newPal/eyes/eyes-neutral-1.png"),
        "mouth": require("../assets/newPal/mouth/mouth-neutral-1.png"),
    },
    0: {
        "globe": require("../assets/newPal/globe/globe-happy.png"),
        "eyes": require("../assets/newPal/eyes/eyes-happy-1.png"),
        "mouth": require("../assets/newPal/mouth/mouth-happy-1.png"),
    }
}


// const Pal = (props) => {
//     valenceIndex = Math.floor(((10 * (props.palScore / bestScore)) / 3) - 1)
//     if (valenceIndex < 0) valenceIndex = 0

//     //let interactivity = "basic"
//     //let interactivity = "anim"
//     let interactivity = "inter"

//     return (
//         <Idle interactivity = {interactivity} style = {styles.feature}>
//             <Poke interactivity = {interactivity}>
//                 <Feature
//                     interactivity = {interactivity}
//                     source={BaseImages[valenceIndex]["globe"]}
//                     altSource={BaseImages[1]["globe"]}
//                     style={styles.feature}
//                 />
//                 <Feature
//                     interactivity = {interactivity}
//                     source={BaseImages[valenceIndex]["eyes"]}
//                     altSource={BaseImages[1]["eyes"]}
//                     style={styles.feature}
//                 />
//                 <Feature
//                     interactivity = {interactivity}
//                     source={BaseImages[valenceIndex]["mouth"]}
//                     altSource={BaseImages[1]["mouth"]}
//                     style={styles.feature}
//                 />
//             </Poke>
//         </Idle>
//     )
// }

class Pal extends Component{
    constructor(props){
        super(props);

        this.state = {
            valenceIndex: Math.floor(((10 * (this.props.palScore / bestScore)) / 3) - 1),
            interactivity: "inter"
        };
        if(this.state.valenceIndex < 0){
            this.state.valenceIndex = 0
        }
    }

    pressIn = () => {
        if(this.state.interactivity == "inter"){
            valenceIndex = this.state.valenceIndex + 3
            this.setState({valenceIndex:  valenceIndex})
        }
    }

    pressOut = () => {
        if(this.state.interactivity == "inter"){
            valenceIndex = this.state.valenceIndex - 3
            this.setState({valenceIndex: valenceIndex})
        }
    }

    render() {
        return (
            <Idle interactivity = {this.state.interactivity} style = {styles.feature}>
                <TouchableWithoutFeedback
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                        
                    }}
                    
                    onPressIn = {() => this.pressIn()}
                    onPressOut = {() => this.pressOut()}
                >
                    <Poke interactivity = {this.state.interactivity}>
                        <Feature
                            interactivity = {this.state.interactivity}
                            source={BaseImages[this.state.valenceIndex]["globe"]}
                            style={styles.feature}
                        />
                        <Feature
                            interactivity = {this.state.interactivity}
                            source={BaseImages[this.state.valenceIndex]["eyes"]}
                            style={styles.feature}
                        />
                        <Feature
                            interactivity = {this.state.interactivity}
                            source={BaseImages[this.state.valenceIndex]["mouth"]}
                            style={styles.feature}
                        />
                        {/* <Tear
                            interactivity = {this.state.interactivity}
                            style={styles.feature}
                            xValue = {100}
                        />
                        <Tear
                            interactivity = {this.state.interactivity}
                            style={styles.feature}
                            xValue = {-30}
                        /> */}
                    </Poke>
                </TouchableWithoutFeedback>
            </Idle>
        )
    }
}

export default Pal;
