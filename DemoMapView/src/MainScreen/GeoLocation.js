
import MapView, {Marker, onRegionChange, onPress} from 'react-native-maps';
import React, { Component } from 'react';

let getPosition = (cb)=>{
    navigator.geolocation.getCurrentPosition(
        (position)=>{
          this.setState({
            region:{
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            },
            currentPosition:{
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          })
        },
        (error) => console.log(error),
        {enableHighAccuracy: false, timeout: 2000}
    )
}