import React, { Component } from 'react';
import {StyleSheet, View, Text, Dimensions, InteractionManager,} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Item, Input} from 'native-base';
import MapView, {Marker, onRegionChange, onPress} from 'react-native-maps';
import pickerImage from './ImagePickerAPI';
import RNFetchBlob from 'react-native-fetch-blob';

export default class App extends Component {
  constructor(props){
    super(props);
    arrayMarkers = [
      {
        latitude: 100,
        longitude: 100
      }
    ];
    this.state={
      region:{
        latitude: 100,
        longitude: 100,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      },
      markers: arrayMarkers,
      loading: true,
      currentPosition: {
        latitude: 100,
        longitude: 100
      },
      avatarSource: null,
              data: null
    }
  }

//
componentWillMount(){
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
    {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000}
)
}

  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      this.setState({ loading: false });
    });
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
  );
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
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
          <View style={styles.container}>
            <MapView
              style = {styles.map}
              region = {this.state.region}
              onRegionChange = {this.onRegionChange.bind(this)}
              onPress = {this.onPress.bind(this)}
            >
              <MapView.Marker coordinate = {this.state.currentPosition}/>
            </MapView>
            <View style = {{flex: 1, flexDirection: 'row', position:'relative'}}>
              <Button iconLeft transparent small primary style = {{flex: 1, 
                    alignSelf: 'flex-end',  
                    flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 10,
                    marginRight: 10}}
                    onPress = {()=>navigator.geolocation.getCurrentPosition(
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
                  )}>
                      <Icon name = 'navigate' style = {{fontSize: 30}}></Icon>        
                </Button>
                <Button iconLeft transparent small primary style = {{flex: 1, 
                    alignSelf: 'flex-end',  
                    flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 10,
                    marginRight: 10}}
                    onPress = {this.show.bind(this)}
                     >
                      <Icon name = 'camera' style = {{fontSize: 30}}></Icon>        
                </Button>
              </View>

          </View>
      </Container>
    );
  }
  show(){
    pickerImage((source,data)=>this.setState({avatarSource: source, data: data}));
  } 
  upload(){
    RNFetchBlob.fetch('POST', 'http://login-mysql.herokuapp.com/src/upload.php', {
        Authorization : "Bearer access-token",
        otherHeader : "foo",
        // this is required, otherwise it won't be process as a multipart/form-data request
        'Content-Type' : 'multipart/form-data',
      }, [
            { name : 'info', data : 'KhoaPham'},
            { name : 'avatar', filename : 'avatar.png', data: this.state.data},
    ])
      .then(res => console.log(res))
      .catch(err => console.log(err))
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
