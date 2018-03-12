
import React, {Component} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {Container, Header, Tab, Tabs, TabHeading, Text, Icon, View, Fab} from 'native-base';

import MapScreen from './MapScreen/MapScreen';
import LoginScreen from './LoginScreen/LoginScreen';
import Account from './Account/Account';
import myTab from './Tabbar'
import { Button } from 'react-native-vector-icons/dist/FontAwesome';

//import Icon from 'react-native-vector-icons/dist/FontAwesome';

export const HomeStack = StackNavigator({
        First: {
            screen: myTab,
            navigationOptions: {header: null}
            
        },
        Second:{
            screen: LoginScreen,
            navigationOptions: { header: null  }
        },
    }
)

export const AccountStack = StackNavigator({
    Account_Screen: {
        screen: Account,
        navigationOptions: {
            title: "Tài khoản"
        }
    }
});

