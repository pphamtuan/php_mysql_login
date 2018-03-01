
import React from 'react';
import {StackNavigator} from 'react-navigation';

import MapScreen from './MapScreen/MapScreen';
import LoginScreen from './LoginScreen/LoginScreen';

export const HomeStack = StackNavigator({
        First: {
            screen: LoginScreen,
            
        },
        Second: {screen: MapScreen},
    }
)