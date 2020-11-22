import React,{Component} from 'react';
import {View, Animated} from 'react-native';

class Feature extends Component{

    constructor(props){
        super(props);

        this.state = {
            animated: false,
            rendered: true,
            opacity: new Animated.Value(0),
            startVal: 1,
            endVal: 1,
            translateX: 0,
            translateY: 0,
            scale: 1,
            flip: 1
        };

        if(this.props.translateX != undefined){
            this.state.translateX = this.props.translateX
        }
        if(this.props.translateY != undefined){
            this.state.translateY = this.props.translateY
        }
        if(this.props.scale != undefined){
            this.state.scale = this.props.scale
        }
        if(this.props.flip == true){
            this.state.flip = -1
        }

        if(this.props.render == false){
            this.state.rendered = false
        }

        if(this.state.rendered == true){
            if(this.props.interactivity == "anim" || this.props.interactivity == "inter"){
                this.state.startVal = 0.1
            }
        }
        else{
            this.state.startVal = 0
        }
    }

    popin = () => {
        if(this.state.rendered == true){
            Animated.sequence([
                Animated.timing(this.state.opacity, {
                    toValue: 1.1,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(this.state.opacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                })
            ]).start();
        } 
    }

    render() {
        return (
            <View
                style={[
                    {
                        transform: [
                            {translateY: this.state.translateY},
                            {translateX: this.state.translateX},
                            {scale: this.state.scale},
                            {scaleX: this.state.flip},
                            {perspective: 1},
                        ]
        
                    },
                ]}
            >
            <Animated.Image
                onLoad = {this.popin}
                {...this.props}
                style={[
                    {
                        opacity: this.state.opacity,
                        transform: [
                            {
                                scale: this.state.opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [this.state.startVal, 1]
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

export default Feature;