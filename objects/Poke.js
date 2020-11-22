import React,{Component} from 'react';
import {View, Image, StyleSheet, Animated, Dimensions} from 'react-native';
import {TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { styles } from '../util/Styles';

class Poke extends Component{
    constructor(props){
        super(props);
        this.interactive = false;

        if(this.props.interactivity == "inter"){
            this.interactive = true;
        }

        this.state = {
            scaleAmount: new Animated.Value(1)
        };
    }

    pressIn = () => {
        if(this.interactive == true){
            Animated.spring(this.state.scaleAmount, {
                toValue: 1.1,
                useNativeDriver: true
            }).start()
        }   
    }

    pressOut = () => {
        if(this.interactive == true){
            Animated.spring(this.state.scaleAmount, {
                toValue: 1,
                friction: 7,
                tension: 100,
                useNativeDriver: true
            }).start()
        }
    }


    render() {
        return (
            <TouchableWithoutFeedback
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
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

export default Poke;