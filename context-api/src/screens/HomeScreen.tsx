import { StatusBar } from 'expo-status-bar';
import {Text, View, TextInput, Button} from 'react-native'
import { styles } from './styles';
import { useContext, useState } from 'react';

import {StackNavigationProp} from '@react-navigation/stack'
import { RootListParams } from '../routes/stack.routes';
import { UserContext } from '../context/userContext';

type HomeProps ={
  navigation : StackNavigationProp<RootListParams, 'Home'>
}

export default function HomeScreen({navigation}: HomeProps){
  const [inputText, setInputText] = useState('')

  const userContext = useContext(UserContext)
  const navigateToUser = () =>{
    userContext?.save(inputText)
    navigation.navigate('User', {username: inputText})
  }

  return(
    <View style={styles.container} >
      <StatusBar style="auto" />
      <TextInput placeholder='Digite o seu nome...' value={inputText} onChangeText={(text)=> setInputText(text)} />
        <Button title='Logar' onPress={navigateToUser} />
    </View>
  )
}