import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Title, Body, Right, Content,  Button, Text, Icon} from 'native-base';

import RNFetchBlob from 'react-native-fetch-blob';

const fontAwesome = {
    family: 'FontAwesome',
    iconFontSize: 30,
    iconMargin: 7,
    iconLineHeight: 33
};

var ImagePicker = require('react-native-image-picker');
var options = {
    title: 'Select a photo',
    takePhotoButtonTitle: 'Take a Photo',
    chooseFromLibraryButtonTitle: 'Choose from gallery',
    quality: 1
  };

  

export default class FetchBlob extends Component{
    render(){
        return(
            <Container>
                 <Header>   
                    <Body>
                        <Title>Fetch Image</Title>
                    </Body>
                </Header>
                <Content>
                    <Container style = {{justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Button iconRight onPress = {this.upload.bind(this)}
                                style = {{alignSelf: 'center'}}>
                            <Icon family = 'FontAwesome' name = 'image' ></Icon>
                            <Text>Select</Text>
                        </Button>
                    </Container>
                </Content>
            </Container>
        );
    }

    upload(){
        RNFetchBlob.fetch('POST', 'https://login-mysql.herokuapp.com/src/getImage.php', {
            Authorization : "Bearer access-token",
            otherHeader : "foo",
            'Content-Type' : 'multipart/form-data',
            }, [
            { name : 'info', data : 'Hello'}])
        .then((respone) => respone.json)
            .then((responeJson)=>{
                alert(responeJson);
            })
        .catch(error => console.log(error))
    }
}

