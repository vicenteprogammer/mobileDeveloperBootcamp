import React from "react";
import {View, Text, StyleSheet ,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function HomeScreen ({navigation}: any){

  const changeScreen = () =>{
    navigation.navigate('gallery')

  }
    return(
        <View style={styles.container}>
            <Text>Home Screen Works</Text>
            <StatusBar style="auto" />
            <Button onPress={changeScreen} title="Go gallery"></Button>
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