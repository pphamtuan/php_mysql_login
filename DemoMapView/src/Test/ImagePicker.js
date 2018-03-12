import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text, Header, Title, Left, Right, Icon, Body, Content, Button} from 'native-base';
import pickerImage from './ImagePickerAPI';
import RNFetchBlob from 'react-native-fetch-blob';

  export default class ImagePickerApp extends Component{
      render(){
          return(
              <Container>
                  <Header>                     
                  </Header>
                  <Body>
                    <Title>Image Picker</Title>
                  </Body>
                  <Content style = {{flex: 1, }}>                      
                      <Button primary style = {{flex: 1, alignSelf: 'center' }} 
                        onPress = {this.show.bind()}>
                        <Text>Show Image</Text>                        
                      </Button>
                      <Button onPress = {this.upload.bind(this)}>
                          <Text>Upload</Text>
                      </Button>
                  </Content>
              </Container>
          );
      }
      show(){
        pickerImage(source=>this.setState({avatarSource: source}));
      }        
      upload(){
        RNFetchBlob.fetch('POST', 'http://login-mysql.herokuapp.com/src/upload.php', {
            Authorization : "Bearer access-token",
            otherHeader : "foo",
            // this is required, otherwise it won't be process as a multipart/form-data request
            'Content-Type' : 'multipart/form-data',
          }, [{ name : 'info', data : 'KhoaPham'}])
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
  }
 

 