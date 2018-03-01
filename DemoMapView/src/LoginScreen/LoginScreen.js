import React, { Component } from 'react'; 
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';

export default class LoginScreen extends Component {
    // Setting up Login Activity title.
    static navigationOptions =
     {
        title: 'Đăng nhập',
     };
   
  constructor(props) {   
      super(props);   
      this.state = {   
        UserEmail: '',
        UserPassword: ''         
      }   
    }

    UserLoginFunction = () =>{
 
      const { UserEmail }  = this.state ;
      const { UserPassword }  = this.state ;
      
      
     fetch('https://login-mysql.herokuapp.com/src/User_Login.php', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
      
         email: UserEmail,      
         password: UserPassword,         
      
       })
      
     }).then((response) => response.json())
           .then((responseJson) => {
             alert(responseJson.message);
            //decode json
                         // If server response message same as Data Matched
            if(true)
             {
      
                 //Then open Profile activity and send user email to profile activity.
                 this.props.navigation.navigate('Second', { Email: UserEmail });
                // <MapScreen/>
      
             }
             else{
      
               Alert.alert(responseJson);
             }
      
           }).catch((error) => {
             console.error(error);
           });      
      
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
                <Button title="Đăng nhập" onPress={this.UserLoginFunction} color="#2196F3" />         
         
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
