import React from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import { View, Text } from 'react-native';

const data = [
	{ label: 'Happy' },
	{ label: 'Neutral' },
	{ label: 'Sad' }];

export const SurveyScreen =  ({navigation}) => {
    return (
        <View style={{
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'center',
		  }}>
		<RadioButtonRN
	  		data={data}
	  		selectedBtn={(e) => console.log(e)}
		/>
        </View>
	)
}