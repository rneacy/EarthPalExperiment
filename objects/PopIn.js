import React,{Component} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';

class PopIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            opacity: new Animated.Value(0),
        };
    }

    zoom = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1.2,
            duration: 250,
            useNativeDriver: true,
        }).start(() => this.settle());
    }

    settle = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }


    render() {
        return (
            <Animated.Image
                onLoad = {this.zoom}
                {...this.props}
                style={[
                    {
                        opacity: this.state.opacity,
                        transform: [
                            {
                                scale: this.state.opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.3, 1]
                                })
                            }
                        ]
                    },
                    this.props.style,
                ]}
            />
        )
    }

}

export default PopIn;