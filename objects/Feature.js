import React,{Component} from 'react';
import {Animated} from 'react-native';

class Feature extends Component{

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
                this.state = {opacity: new Animated.Value(1)};
            }
        }
    }

    popin = () => {
        if(this.state.animated == true){
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
                                    outputRange: [0.1, 1]
                                }
                                )
                            },
                            {perspective: 1000}
                        ]
        
                    },
                    this.props.style,
                ]}
            />
        )
    }

}

export default Feature;