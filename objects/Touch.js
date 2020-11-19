import React,{Component} from 'react';
import {View, Image, StyleSheet, Animated, Dimensions} from 'react-native';
import {TouchableWithoutFeedback } from 'react-native-gesture-handler';

class Touch extends Component{
    constructor(props){
        super(props);
        this.state = {
            scaleAmount: new Animated.Value(1)
        };
    }

    pressIn = () => {
        Animated.spring(this.state.scaleAmount, {
            toValue: 1.1,
            useNativeDriver: true
        }).start()
    }

    pressOut = () => {
        Animated.spring(this.state.scaleAmount, {
            toValue: 1,
            friction: 3,
            tension: 100,
            useNativeDriver: true
        }).start()
    }


    render() {
        return (
            <TouchableWithoutFeedback
                style = {{width: Dimensions.get('window').width  , height: Dimensions.get('window').height}} // move to Animated.Image?
                onPressIn = {() => this.pressIn()}
                onPressOut = {() => this.pressOut()}
            >
            <Animated.View
                //onLoad = {this.zoom}
                {...this.props}
                style={[
                    {
                        transform: [
                            {scale: this.state.scaleAmount},
                            {perspective: 1000}
                        ]
                    },
                    this.props.style,
                ]}
            />
            </TouchableWithoutFeedback>
        )
    }

}

export default Touch;
