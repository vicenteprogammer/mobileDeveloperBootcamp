import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GaleeryScreen';

const {Screen, Navigator} = createStackNavigator()


export default function StackRoutes(){
    return(
        <Navigator>
            <Screen
             name='home'
             component={HomeScreen}
             options={{
                title: 'Home Screen',
             }}
            />

            <Screen
             name='gallery'
             component={GalleryScreen}
            />
        </Navigator>
    )
}