import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import UserScreen from '../screens/UserScreen'
import { UserContext, UserProvider } from '../context/userContext'


export type RootListParams ={
  Home: undefined,
  User: {username: string}
}

const {Screen, Navigator} = createStackNavigator<RootListParams>()

export default function StackRoute(){
  return(
    <UserProvider>
      <Navigator>
       <Screen name='Home' component={HomeScreen}/>
       <Screen name='User' component={UserScreen}/>
     </Navigator>
    </UserProvider>
  )
}