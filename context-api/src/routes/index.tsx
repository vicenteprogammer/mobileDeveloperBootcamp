import {NavigationContainer} from '@react-navigation/native'
import StackRoute from './stack.routes'


export default function Routes(){
  return(
    <NavigationContainer>
      <StackRoute/>
    </NavigationContainer>
  )
}