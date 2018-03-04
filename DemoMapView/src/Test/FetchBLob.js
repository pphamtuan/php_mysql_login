import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Title, Body, Right, Content,  Button, Text, Icon} from 'native-base';

import RNFetchBlob from 'react-native-fetch-blob';

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
                    <Button iconRight onPress = {this.upload.bind(this)}>
                        <Icon name = 'home'></Icon>
                        <Text>Show Image</Text>
                    </Button>
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

