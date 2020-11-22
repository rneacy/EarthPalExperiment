import React,{Component} from 'react';
import {View, Image, Dimensions, Animated } from 'react-native';
import Feature from '../objects/Feature';

const valences = {0: "Happy", 1: "Neutral", 2: "Sad"};
const bestScore = 50;
let valenceIndex = 0;

const teardrop = require("../assets/newPal/embellishments/tear.png");

class Tear extends Component{
    constructor(props){
        super(props);

        this.state = {
            animated: false,
            rendered: true,
            opacity: new Animated.Value(0)
        };

        if(this.props.render == false){
            this.state.rendered = false
        }

        if(this.state.rendered == true){
            if(this.props.interactivity == "anim" || this.props.interactivity == "inter"){
                this.state.animated = true;
            }
            else{
                this.state.state = {opacity: new Animated.Value(1)};
            }
        }
    }

    fall = () => {
        if(this.state.animated == true){
            Animated.loop(
                Animated.sequence([
                    Animated.timing(this.state.opacity, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(this.state.opacity, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true,
                    })
                ])
            ).start()
        } 
    }



    render() {
        return (
            <View
                style={[
                    {
                        transform: [
                            {
                                translateX: this.props.xValue
                            },
                            {perspective: 1000}
                        ]
        
                    },
                    this.props.style,
                ]}
            >
            <Animated.Image
            onLoad = {this.fall}
            {...this.props}
            source = {teardrop}
            style={[
                {
                    opacity: this.state.opacity,
                    transform: [
                        {
                            translateY: this.state.opacity.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 250]
                            }
                            )
                        },
                        {
                            scale: this.state.opacity.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.3, 1]
                            }
                            )
                        },
                        {perspective: 1000}
                    ]
                },
                this.props.style,
            ]}
            />
            </View>
        )
    }
}

export default Tear;
