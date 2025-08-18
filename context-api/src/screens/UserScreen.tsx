import {View, Text} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';

import {RouteProp} from '@react-navigation/native'
import { RootListParams } from '../routes/stack.routes';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

type UserProps ={
  route: RouteProp<RootListParams, 'User'>
}

export default function UserScreen({route}: UserProps){

  const {username} = route.params

  const contextValue = useContext(UserContext)

  const name = contextValue?.name

  const dinamicName = contextValue?.loginName

  return(
    <View style={styles.container} >
      <StatusBar style="auto" />
      <Text>Welcome, {username}</Text>
      <Text>Welcome, {name}</Text>
      <Text>Welcome, {dinamicName}</Text>

    </View>
  )
}