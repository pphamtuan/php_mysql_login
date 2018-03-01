
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, onRegionChange, onPress} from 'react-native-maps';
import {HomeStack} from './src/Router';

export default class App extends Component {
  render(){
    return(
      <HomeStack/>
    );
    
  }
}
