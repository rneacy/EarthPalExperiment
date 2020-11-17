import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    home: {
      justifyContent: "center",
      paddingHorizontal: 20
    },
    titleText: {
      fontSize: 30,
      color: "#fff",
      lineHeight: 70,
      textAlign: "center",
      textAlignVertical: "center",
    },
    globe: {
      flex: 0,
      width: 300,
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'contain'
    },
    eyes: {
      flex: 0,
      width: 300,
      height: 300,
      alignItems: 'center'
    }
  });