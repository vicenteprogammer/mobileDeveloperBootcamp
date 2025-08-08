import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function GelleryScreen(){
    return(
        <View style={styles.container}>
            <Text>Gallery Screen Works</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});