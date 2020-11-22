import React from 'react'
import { View, Text, Image, ScrollView, TextInput , StyleSheet, Button } from 'react-native';

export const FormEntry = (props) => {
    const [value, onChangeText] = React.useState('');

    return (
      <>
        <View style = {{flex: 1, flexDirection: "row", marginBottom: 60}}>
          <View style={{flex: 2, height: 50, backgroundColor: '#ddd', justifyContent:"center", borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}>
              <Text style={{textAlignVertical: "center", textAlign: "center"}}>{props.label}</Text>
          </View>
          <View style={{flex: 4, width: 50, height: 50, backgroundColor: '#d0d0d0', justifyContent:"center", borderTopRightRadius: 5, borderBottomRightRadius: 5}}>
            <TextInput
              style = {{padding: 5, paddingHorizontal: 10, marginHorizontal: 5, borderRadius: 3, backgroundColor: "#eeeeee"}}
              onChangeText= {text => {onChangeText(text); props.callback(text);}}
              value = {value}
            />
          </View>
        </View>
      </>
    );
  }