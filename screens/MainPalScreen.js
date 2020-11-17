import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../util/Styles';
import eyes from '../visuals/eyes/eyes-saddest.png';
import globe from '../visuals/globe/globe0001.png';

const MainPalScreen =  ({navigation, route}) => {
    return (
        <View style={{backgroundColor: '#3F3F77', flex:1}}>
            <EarthPal/>
            <Eyes/>
        </View>
    )
}

class EarthPal extends React.Component{
    render(){
        return(
                <Image source ={globe} style = {styles.globe}/>
        )
    }
}

class Eyes extends React.Component{
    render(){
        return(
            <Image source ={eyes} style = {styles.eyes}/>
        )
    }
}

export default MainPalScreen;