import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text, Header, Title, Left, Right, Icon, Body, Content, Button} from 'native-base';
import pickerImage from './ImagePickerAPI';

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
                      <Button primary style = {{flex: 1, alignSelf: 'center' }} onPress = {this.show.bind()}>
                        <Text>Show Image</Text>                        
                      </Button>
                  </Content>
              </Container>
          );
      }
      show(){
        pickerImage(source=>this.setState({avatarSource: source}));
      }        
  }
 

 