import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Container, Text, Header, Title, Left, Right, Icon, Body, Content, Button} from 'native-base';
import pickerImage from './ImagePickerAPI';
import RNFetchBlob from 'react-native-fetch-blob';

  export default class ImagePickerApp extends Component{
      constructor(props){
          super(props);
          this.state = {
              avatarSource: null,
              data: null
          }
      }
      render(){
          let img = this.state.avatarSource == null? null:
            <Image
                source = {this.state.avatarSource}
                style = {{height: 200, width: 100}}
            />
          return(
              <Container>
                  <Header>                     
                  </Header>
                  <Body>
                    <Title>Image Picker</Title>
                  </Body>
                  <Content style = {{flex: 1, }}>                      
                      <Button primary style = {{flex: 1, alignSelf: 'center' }} 
                        onPress = {this.show.bind(this)}>
                        <Text>Show Image</Text>                        
                      </Button>
                      <Button onPress = {this.upload.bind(this)}>
                          <Text>Upload</Text>
                      </Button>
                      {img}
                  </Content>
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
                { name : 'image', filename : 'image.png', type: 'image/png', data: this.state.data},
        ])
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
  }
 

 