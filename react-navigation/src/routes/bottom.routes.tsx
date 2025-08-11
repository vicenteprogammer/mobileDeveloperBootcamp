import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons'
const {Screen, Navigator} = createBottomTabNavigator();

export default function BottomRoutes(){
    return(
        <Navigator>
        <Screen
         name='home'
         component={HomeScreen}
         options={{
            tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons
                 name='home'
                 size={24}
                 color={'blue'}
                />
            )
         }}
        />
        <Screen
         name='gallery'
         component={HomeScreen}
         options={{
            tabBarIcon:({color, size})=>(
                <MaterialCommunityIcons
                 name="view-gallery"
                 size={24}
                 color="blue" />
            )
         }}
        />
    </Navigator>
    )
}