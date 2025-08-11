import {NavigationContainer} from  '@react-navigation/native'

import StackRoutes from './stack.routes'
import BottomRoutes from './bottom.routes'
import DraweNav from './drawer.routes'

export default function Routes(){
  return(
    <NavigationContainer>
        <DraweNav/>
    </NavigationContainer>
  )
}