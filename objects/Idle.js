import React,{Component} from 'react';
import {Animated, Easing, View, Dimensions} from 'react-native';
import { styles } from '../util/Styles';

class Idle extends Component{
    constructor(props){
        super(props);
        this.animated = false;

        if(this.props.interactivity == "anim" || this.props.interactivity == "inter"){
            this.animated = true;
        }

        this.state = {
            verticalValue: new Animated.Value(0),
            toValue: 50,
            duration: 3000
        };
    }

    componentDidMount = () => {
        if(this.animated == true){
            Animated.timing(this.state.verticalValue, {
                toValue: this.state.toValue,
                duration: this.state.duration,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.quad)
            }).start();
            
            this.state.verticalValue.addListener(({value}) => {
                if (value == this.state.toValue) {
                    Animated.timing(this.state.verticalValue, {
                        toValue: 0,
                        duration: this.state.duration,
                        useNativeDriver: true,
                        easing: Easing.inOut(Easing.quad)
                    }).start();
                }
                else if (value == 0) {
                    Animated.timing(this.state.verticalValue, {
                        toValue: this.state.toValue,
                        duration: this.state.duration,
                        useNativeDriver: true,
                        easing: Easing.inOut(Easing.quad)
                    }).start();
                };
            })
        }
    }


    render() {
        return (
            <Animated.View
                {...this.props}
                style={[
                    {
                        transform: [
                            {
                                translateY: this.state.verticalValue
                            }
                        ]
                    },
                    this.props.style,
                ]}
            />
        )
    }

}

export default Idle;