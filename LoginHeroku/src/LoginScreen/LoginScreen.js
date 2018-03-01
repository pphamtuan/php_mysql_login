import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';

// Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';

export default class LoginScreen extends Component {
    // Setting up Login Activity title.
    static navigationOptions =
     {
        title: 'LoginActivity',
     };
   
  constructor(props) {   
      super(props);   
      this.state = {   
        UserEmail: '',
        UserPassword: ''   
      }   
    }

    render() {
        return (         
            <View style={styles.MainContainer}>         
                <Text style= {styles.TextComponentStyle}>Đăng nhập</Text>          
                <TextInput                  
                  // Adding hint in Text Input using Place holder.
                  placeholder="Nhập email"         
                  onChangeText={UserEmail => this.setState({UserEmail})}         
                  // Making the Under line Transparent.
                  underlineColorAndroid='transparent'         
                  style={styles.TextInputStyleClass}
                />
         
                <TextInput                  
                  // Adding hint in Text Input using Place holder.
                  placeholder="Nhập mật khẩu"         
                  onChangeText={UserPassword => this.setState({UserPassword})}         
                  // Making the Under line Transparent.
                  underlineColorAndroid='transparent'         
                  style={styles.TextInputStyleClass}         
                  secureTextEntry={true}
                />         
                <Button title="Đăng nhập" color="#2196F3" />         
         
        </View>
                    
            );
          }
  
  }


  const styles = StyleSheet.create({
 
    MainContainer :{
     
    justifyContent: 'center',
    flex:1,
    margin: 10,
    },
     
    TextInputStyleClass: {
     
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
     borderColor: '#2196F3',
     
     // Set border Radius.
     borderRadius: 5 ,
    
    },
    
     TextComponentStyle: {
       fontSize: 20,
      color: "#000",
      textAlign: 'center', 
      marginBottom: 15
     }
    });