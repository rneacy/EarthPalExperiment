import React,{Component} from 'react';
import { Dimensions } from 'react-native'
import { styles } from '../util/Styles'
import Feature from '../objects/Feature'
import Idle from '../objects/Idle'
import Poke from '../objects/Poke'
import {TouchableWithoutFeedback } from 'react-native-gesture-handler';

const valences = {0: "Happy", 1: "Neutral", 2: "Sad"};
const bestScore = 50;
let valenceIndex = 0;

const tree = require("../assets/newPal/embellishments/tree.png")
const tree2 = require("../assets/newPal/embellishments/tree-2.png")
const cloud = require("../assets/newPal/embellishments/cloud.png")
const cloud2 = require("../assets/newPal/embellishments/cloud-2.png")
const rocksFront = require("../assets/newPal/embellishments/rocks-front.png")
const rocksBack = require("../assets/newPal/embellishments/rocks-back.png")
const star = require("../assets/newPal/embellishments/star.png")
const flies = require("../assets/newPal/embellishments/flies.png")

const BaseImages = {
    5: {
        "globe": require("../assets/newPal/globe/globe-sad.png"),
        "eyes": require("../assets/newPal/eyes/eyes-sad-2.png"),
        "mouth": require("../assets/newPal/mouth/mouth-sad-2.png"),
        "glow": require("../assets/newPal/glow/glow-sad.png")
    },
    4: {
        "globe": require("../assets/newPal/globe/globe-neutral.png"),
        "eyes": require("../assets/newPal/eyes/eyes-neutral-2.png"),
        "mouth": require("../assets/newPal/mouth/mouth-neutral-2.png"),
        "glow": require("../assets/newPal/glow/glow-neutral.png")
    },
    3: {
        "globe": require("../assets/newPal/globe/globe-happy.png"),
        "eyes": require("../assets/newPal/eyes/eyes-happy-2.png"),
        "mouth": require("../assets/newPal/mouth/mouth-happy-2.png"),
        "glow": require("../assets/newPal/glow/glow-happy.png")
    },
    2: {
        "globe": require("../assets/newPal/globe/globe-sad.png"),
        "eyes": require("../assets/newPal/eyes/eyes-sad-1.png"),
        "mouth": require("../assets/newPal/mouth/mouth-sad-1.png"),
        "glow": require("../assets/newPal/glow/glow-sad.png")
    },
    1: {
        "globe": require("../assets/newPal/globe/globe-neutral.png"),
        "eyes": require("../assets/newPal/eyes/eyes-neutral-1.png"),
        "mouth": require("../assets/newPal/mouth/mouth-neutral-1.png"),
        "glow": require("../assets/newPal/glow/glow-neutral.png")
    },
    0: {
        "globe": require("../assets/newPal/globe/globe-happy.png"),
        "eyes": require("../assets/newPal/eyes/eyes-happy-1.png"),
        "mouth": require("../assets/newPal/mouth/mouth-happy-1.png"),
        "glow": require("../assets/newPal/glow/glow-happy.png")
    }
}

class Pal extends Component{
    constructor(props){
        super(props);

        valenceIndex = Math.floor(((10 * (this.props.palScore / bestScore)) / 3) - 1);

        this.state = {
            //valenceIndex: Math.floor(((10 * (this.props.palScore / bestScore)) / 3) - 1),
            //interactivity: this.props.interactivity,
            //detail: this.props.detail,

            renderTrees: false,
            renderTrees2: false,
            renderTrash: false,
            renderClouds: false,
            renderClouds2: false,
            renderGlow: false,
            renderStars: false,
            renderFlies: false,
        };
        if(valenceIndex < 0){
            valenceIndex = 0
        }

        console.log("New pal!")
        console.log(BaseImages === undefined)
        console.log(valenceIndex === undefined)
        console.log(BaseImages[valenceIndex].glow === undefined)

        if(this.props.detail == "medium" || this.props.detail == "high"){
            if(valenceIndex == 0 || valenceIndex == 3){
                //happy embellishments
                this.state.renderTrees = true
                if(this.props.detail == "high"){
                    this.state.renderGlow = true
                    this.state.renderStars = true
                }
            }
            if(valenceIndex == 1 || valenceIndex == 4){
                //neutral embellishments
                this.state.renderTrees2 = true
                this.state.renderClouds2 = true
                if(this.props.detail == "high"){
                    this.state.renderGlow = true
                }
            }
            if(valenceIndex == 2 || valenceIndex == 5){
                //sad embellishments
                this.state.renderTrash = true
                this.props.renderClouds = true
                if(this.props.detail == "high"){
                    this.state.renderGlow = true
                    this.state.renderFlies = true
                }
            }
        }

    }

    pressIn = () => {
        if(this.props.interactivity == "inter"){
            valenceIndex = valenceIndex + 3
            //this.setState({valenceIndex:  valenceIndex})
        }
    }

    pressOut = () => {
        if(this.props.interactivity == "inter"){
            valenceIndex = valenceIndex - 3
            //this.setState({valenceIndex: valenceIndex})
        }
    }

    render() {
        return (
            <Idle interactivity = {this.props.interactivity} style = {styles.view}>
                <TouchableWithoutFeedback
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                    }}
                    
                    onPressIn = {() => this.pressIn()}
                    onPressOut = {() => this.pressOut()}
                >
                    <Poke interactivity = {this.props.interactivity} style = {styles.view}>
                        <Feature
                            // Glow
                            source ={BaseImages[valenceIndex]["glow"]}
                            interactivity = {this.props.interactivity}
                            translateY = {-70} scale = {1.4}
                            style={styles.feature}
                            render = {this.state.renderGlow}
                        />

                        {/* Clouds */}
                        <Feature
                            // Cloud 1 (back layer)
                            source ={cloud}
                            interactivity = {this.props.interactivity}
                            translateX = {50} translateY = {-210} scale = {1.3}
                            flip = {true}
                            style={styles.feature}
                            render = {this.state.renderClouds}
                        />

                        <Feature
                            // Cloud 2 (back layer)
                            source ={cloud}
                            interactivity = {this.props.interactivity}
                            translateX = {100} translateY = {170} scale = {0.9}
                            style={styles.feature}
                            render = {this.state.renderClouds}
                        />

                        <Feature
                            // Trash (back layer)
                            source ={rocksBack}
                            interactivity = {this.props.interactivity}
                            translateY = {-12}
                            style={styles.feature}
                            render = {this.state.renderTrash}
                        />

                        {/* ----- Face Features ----- */}
                        <Feature
                            interactivity = {this.props.interactivity}
                            source={BaseImages[valenceIndex]["globe"]}
                            style={styles.feature}
                        />
                        <Feature
                            interactivity = {this.props.interactivity}
                            source={BaseImages[valenceIndex]["eyes"]}
                            style={styles.feature}
                        />
                        <Feature
                            interactivity = {this.props.interactivity}
                            source={BaseImages[valenceIndex]["mouth"]}
                            style={styles.feature}
                        />
                        
                        {/* ------------------------- */}
                        
                        {/* Trees */}
                        <Feature
                            // Tree 1 (middle) - happy
                            source ={tree}
                            interactivity = {this.props.interactivity}
                            translateY = {-650}
                            style={styles.view}
                            render = {this.state.renderTrees}
                        />
                        <Feature
                            // Tree 2 (left) - happy
                            source ={tree}
                            interactivity = {this.props.interactivity}
                            translateY = {-500} translateX = {-60} scale = {0.8}
                            style={styles.view}
                            render = {this.state.renderTrees}
                        />
                        <Feature
                            // Tree 3 (right) - happy
                            source ={tree}
                            interactivity = {this.props.interactivity}
                            translateY = {-430} translateX = {60} scale = {0.7}
                            style={styles.view}
                            render = {this.state.renderTrees}
                        />
                        <Feature
                            // Tree (middle) - neutral
                            source ={tree2}
                            interactivity = {this.props.interactivity}
                            translateY = {-485} scale = {0.8}
                            style={styles.view}
                            render = {this.state.renderTrees2}
                        />

                        {/* Stars */}
                        <Feature
                            //top left
                            source = {star}
                            interactivity = {this.props.interactivity}
                            translateY = {-340} translateX = {-130} scale = {0.6}
                            style={styles.view}
                            render = {this.state.renderStars}
                        />
                        <Feature
                            //top right
                            source = {star}
                            interactivity = {this.props.interactivty}
                            translateY = {-230} translateX = {120} scale = {0.4}
                            style={styles.view}
                            render = {this.state.renderStars}
                        />

                        <Feature
                            //bottom left
                            source = {star}
                            interactivity = {this.props.interactivty}
                            translateY = {-330} translateX = {-130} scale = {0.9}
                            style={styles.view}
                            render = {this.state.renderStars}
                        />

                        <Feature
                            //bottom right
                            source = {star}
                            interactivity = {this.props.interactivty}
                            translateY = {-480} translateX = {90} scale = {1.2}
                            style={styles.view}
                            render = {this.state.renderStars}
                        />

                        {/* Trash */}
                        <Feature
                            // Trash (front layer)
                            source ={rocksFront}
                            interactivity = {this.props.interactivty}
                            style={styles.feature}
                            render = {this.state.renderTrash}
                        />

                        {/* Clouds (front) */}
                        <Feature
                            // Cloud 2 - sad
                            source ={cloud}
                            interactivity = {this.props.interactivty}
                            translateX = {-70} translateY = {80}
                            flip = {true}
                            style={styles.feature}
                            render = {this.state.renderClouds}
                        />

                        <Feature
                            // Cloud - neutral
                            source ={cloud2}
                            interactivity = {this.props.interactivty}
                            translateX = {-30} translateY = {90}
                            flip = {true}
                            style={styles.feature}
                            render = {this.state.renderClouds2}
                        />

                        <Feature
                            //Flies
                            source = {flies}
                            interactivity = {this.props.interactivty}
                            style={styles.feature}
                            translateY = {-80}
                            render = {this.state.renderFlies}
                        />
                    </Poke>
                </TouchableWithoutFeedback>
            </Idle>
        )
    }
}

export default Pal;
