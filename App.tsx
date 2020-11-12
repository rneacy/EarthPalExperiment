import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pal from './Objects/Pal'

export default function App() {
  return (
    <View style={styles.container}>
      <Pal />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: "#FFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
