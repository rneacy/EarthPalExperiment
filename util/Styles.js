import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    home: {
      justifyContent: "center",
      paddingHorizontal: 20
    },
    main: {
      flex: 1,
      justifyContent: "center",
      textAlign: "center",
      //padding: 300,
      backgroundColor: "#566A93"
    },
    titleText: {
      fontSize: 30,
      color: "#fff",
      lineHeight: 70,
      textAlign: "center",
      textAlignVertical: "center",
    },
    normalText: {
      fontSize: 20,
      color: "#fff",
      textAlign: "center",
      textAlignVertical: "center"
    },
    feature: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width,
      position: 'absolute',
    },
    view: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height * 2,
      position: 'absolute',
      resizeMode: 'center',
      paddingTop: 220
    },
  });
