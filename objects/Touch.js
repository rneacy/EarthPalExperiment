import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, Animated} from 'react-native';

class Touch extends Component{
    constructor(props){
        super(props);
        this.state = {
            scaleAmount: new Animated.Value(1)
        }
    }


    pressIn(){
        Animated.spring(this.state.scaleAmount, {
            toValue: 0.5,
            useNativeDriver: true
        }).start()
    }

    pressOut(){
        Animated.spring(this.state.scaleAmount, {
            toValue: 1,
            friction: 7,
            tension: 40,
            useNativeDriver: true
        }).start()
    }


    render() {
        return (
            <View>
            <TouchableWithoutFeedback
                onPressIn = {this.pressIn.bind(this)}
                onPressOut = {this.pressOut.bind(this)}
            >
                <Animated.View
                    {...this.props}
                    style={[
                     {
                            transform: [
                             {
                                scale: this.state.scaleAmount
                            }]
                     },
                    this.props.style,
                 ]}
                />
        
            </TouchableWithoutFeedback>
            </View>
        )
    }

}

export default Touch;