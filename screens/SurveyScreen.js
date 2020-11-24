import React from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { StyleSheet, ScrollView, Text, Dimensions, Image, View} from 'react-native';
import AwesomeButtonC137 from "react-native-really-awesome-button/src/themes/c137"
import { email } from "../util/Funcs"

/* Likert scale - parsed parameters are prop.top & prop.bottom
   for the text shown at the top and bottom of the scale. */
const LikertScale = (props) => {
	var textStyleTop = styles.text_horizontal, textStyleBot = styles.text_horizontal
	var radio_buttons = [], labelHorizontal = true, viewStyle = {}
	for (var i = 0; i < parseInt(props.number); i++){
		radio_buttons.push({label: ''+(i+1), value: (i+1)})
	}
	if (props.alignment === styles.radio_vertical) {
		viewStyle = styles.horizontal
		labelHorizontal = false
		textStyleTop = styles.text_vertical_left
		textStyleBot = styles.text_vertical_right
	}
	return (
		<View style={viewStyle}>
			<Text style = {textStyleTop}> {props.top} </Text>
			<RadioForm
				style = {props.alignment}
				radio_props= {radio_buttons}
				initial={0}
				labelHorizontal = {labelHorizontal}
				labelColor = '#d0d0d0'
				buttonColor = '#566A93'
				selectedButtonColor = '#566A93'
				onPress={(value) => { props.callback(value) }}
			/>
			<Text style = {textStyleBot}> {props.bottom} </Text>
		</View>
	);
}

let likertScores = {
	"valence": 1,
	"arousal": 1,
	"anxiety": 1,
	"pride": 1,
	"stress": 1,
	"hope": 1,
	"guilt": 1,
	"compassion": 1
}

const SurveyScreen = ({navigation, route}) => {

	React.useEffect(() => {
		console.log("hi")
		navigation.setOptions({title:"Survey (" + route.params.surveyData.count + "/40)"})
	}, [])

	return (
	<ScrollView style = {{backgroundColor: '#fff',}}>
		<Text style = {styles.title}> Section 1 - Valence & Arousal </Text>

		<Text style = {styles.text}> Please use the valence self-assessment manikin
						    below to guide your answer. </Text>
		<Image source={require('../assets/survey/SAM-Valence.png')} style={styles.image}/>
		<LikertScale 
			top="Sad"
			bottom="Happy"
			number={9}
			alignment={styles.radio_horizontal}
			callback = { (value) => {
				likertScores["valence"] = value;
			}}
		/>

		<Text style = {{textAlign: 'center'}}> Please use the arousal self-assessment manikin
											   below to guide your answer. </Text>
		<Image source={require('../assets/survey/SAM-Arousal.png')} style={styles.image}/>
		<LikertScale 
			top="Low"
			bottom="High" 
			number={9} 
			alignment={styles.radio_horizontal} 
			callback={ (value) => {
				likertScores["arousal"] = value;
			}}
		/>

		<Text style = {styles.title}> Section 2 - Semantic Categories </Text>
		<Text style = {styles.text}> Please use the 5-point scale below to rate your feelings of the respective emotion </Text>
		
		<Text style = {styles.sub_title}> Anxiety </Text>
		<LikertScale 
			top="Low" 
			bottom="High" 
			number={5} 
			alignment={styles.radio_vertical} 
			callback={ (value) => {
				likertScores["anxiety"] = value;
			}}
		/>

		<Text style = {styles.sub_title}> Pride </Text>
		<LikertScale 
			top="Low" 
			bottom="High" 
			number={5} 
			alignment={styles.radio_vertical}
			callback={ (value) => {
				likertScores["pride"] = value;
			}} 
		/>

		<Text style = {styles.sub_title}> Stress </Text>
		<LikertScale 
			top="Low" 
			bottom="High" 
			number={5} 
			alignment={styles.radio_vertical} 
			callback={ (value) => {
				likertScores["stress"] = value;
			}}
		/>

		<Text style = {styles.sub_title}> Hope </Text>
		<LikertScale 
			top="Low" 
			bottom="High" 
			number={5} 
			alignment={styles.radio_vertical} 
			callback={ (value) => {
				likertScores["hope"] = value;
			}}
		/>

		<Text style = {styles.sub_title}> Guilt </Text>
		<LikertScale 
			top="Low" 
			bottom="High" 
			number={5} 
			alignment={styles.radio_vertical} 
			callback={ (value) => {
				likertScores["guilt"] = value;
			}}
		/>

		<Text style = {styles.sub_title}> Compassion </Text>
		<LikertScale 
			top="Low" 
			bottom="High" 
			number={5} 
			alignment={styles.radio_vertical} 
			callback={ (value) => {
				likertScores["compassion"] = value;
			}}
		/>

		<Text style = {styles.text}> Once you are happy with your answers, select the button below to submit </Text>
		<Text></Text>
		<AwesomeButtonC137
			stretch
			style = {styles.button}
			onPress = { () => {
				let updatedSurveyData = route.params.surveyData;
				let newSurveyEntry = {
					combo: route.params.combo,
					sams: {
						valence: likertScores["valence"],
						arousal: likertScores["arousal"],
					},
					sds: {
						anxiety: likertScores["anxiety"],
						pride: likertScores["pride"],
						stress: likertScores["stress"],
						hope: likertScores["hope"],
						guilt: likertScores["guilt"],
						compassion: likertScores["compassion"]
					}
				}
				updatedSurveyData.narratives[route.params.order[0]].push(newSurveyEntry);

				likertScores = { // reset likerts for next time
					"valence": 1,
					"arousal": 1,
					"anxiety": 1,
					"pride": 1,
					"stress": 1,
					"hope": 1,
					"guilt": 1,
					"compassion": 1
				}

				let newOrder = route.params.order;
				let newCount = route.params.surveyData.count + 1;
				updatedSurveyData.count = newCount;
				if(route.params.innerOrder.length >= 1) {
					navigation.reset({
						index: 0,
						routes: [
							{ name: "mainpal", params: { order: route.params.order, parsedPal: route.params.parsedPal, data: route.params.order[0] === 0 ? route.params.parsedPal : route.params.data, surveyData: updatedSurveyData, innerOrder: route.params.innerOrder}}
						]
					})
				}
				else{
					newOrder.shift();

					if(newOrder.length >= 1){
						navigation.reset({
							index: 0,
							routes: [
								{ name: "narrative", params: { order: newOrder, parsedPal: route.params.parsedPal, surveyData: updatedSurveyData }}
							]
						});
					}
					else {
						delete updatedSurveyData.count;
						email(updatedSurveyData);
						navigation.reset({
							index: 0,
							routes: [
								{ name: "thanks" }
							]
						})
					}
				}
			}
			}
		>
			Submit Survey
		</AwesomeButtonC137>
	</ScrollView>
	);
}

const styles = StyleSheet.create({
	radio_horizontal: {
		marginLeft: Dimensions.get('window').width/2-16,
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	radio_vertical: {
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	horizontal: {
		flex: 1, 
		flexDirection: 'row',
		padding: 20,
	},
	title: {
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 20,
		fontSize: 20,
		fontWeight: 'bold',
	},
	sub_title: {
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 20,
		fontSize: 17,
		fontWeight: 'bold',
		color: '#566A93',
	},
	text_horizontal: {
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 20,
		fontSize: 17,
	},
	text_vertical_right: {
		textAlign: 'right',
		marginLeft: 20,
		marginRight: 10,
		fontSize: 17,
	},
	text_vertical_left: {
		textAlign: 'left',
		marginLeft: 20,
		marginRight: 10,
		fontSize: 17,
	},
	image: {
		marginLeft: 5,
		width: Dimensions.get('window').width-15,
		resizeMode: 'contain',
		height: 110,
	},
	text: {
		textAlign: 'center',
		marginLeft: 10,
		marginRight: 10,
	},
	button: {
		marginBottom: 20,
		padding: 20,
		marginHorizontal: 20,
	}
});

export default SurveyScreen