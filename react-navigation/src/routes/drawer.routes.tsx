import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import GalleryScreen from '../screens/GaleeryScreen'

const {Screen,Navigator} = createDrawerNavigator()

export default function DraweNav(){
    return(
        <Navigator>
            <Screen
             name='home'
             component={HomeScreen}
            />
            <Screen
             name='gallery'
             component={GalleryScreen}
            />
        </Navigator>
    )
}