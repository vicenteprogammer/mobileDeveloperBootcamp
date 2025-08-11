import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';

const {Screen, Navigator} = createBottomTabNavigator();

export default function BottomRoutes(){
    return(
        <Navigator>
        <Screen
         name='home'
         component={HomeScreen}
        />
        <Screen
         name='gallery'
         component={HomeScreen}
        />
    </Navigator>
    )
}