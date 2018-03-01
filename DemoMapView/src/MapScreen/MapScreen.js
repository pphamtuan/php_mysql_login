
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, onRegionChange, onPress} from 'react-native-maps';

export default class MapScreen extends Component {
  constructor(props){
    super(props);
    arrayMarkers = [
      {
        latitude: 10.558671,
        longitude: 107.337684
      }
    ];
    this.state={
      region:{
        latitude: 10.8376571,
        longitude: 106.6738338,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      },
      markers: arrayMarkers,
    }
  }

  onRegionChange(data){
    console.log(data);
  }

  onPress(data){
    console.log(data.nativeEvent.coordinate.latitude);
    let latitude = data.nativeEvent.coordinate.latitude;
    let longitude = data.nativeEvent.coordinate.longitude;
    arrayMarkers.push({
      latitude: latitude,
      longitude: longitude
    });
    this.setState({markers:arrayMarkers});
  }
  renderMarkers(){
    markers= [];
    for (marker of this.state.markers){
      markers.push(
        <MapView.Marker key = {marker.longitude} title = {'Toi o day'+ marker.latitude} 
          description = {'day la mo ta'} 
          coordinate = {marker}
        />
      )
    }
    return markers;
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style = {styles.map}
          region = {this.state.region}
          onRegionChange = {this.onRegionChange.bind(this)}
          onPress = {this.onPress.bind(this)}
        >
          <MapView.Marker title = {'Toi o day'} 
              description = {'day la mo ta'} 
              coordinate = {this.state.region}
          />
          {this.renderMarkers()}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
