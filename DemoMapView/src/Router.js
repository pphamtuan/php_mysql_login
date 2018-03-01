import {StackNavigator} from 'react-navigation';

import MapScreen from './MapScreen/MapScreen';
import LoginScreen from './LoginScreen/LoginScreen';

export const MainProject = StackNavigator(
    {
        First: {screen: LoginScreen},
        Second: {screen: MapScreen}
    }
)