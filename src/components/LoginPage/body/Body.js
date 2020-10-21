import React, { Component } from 'react';
import { Text, Alert, Button, View, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class Body extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  go = () => {
           const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email) === true){
               alert('valid');
           }
           else{
               alert();
           }
 
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
    <>
       
        


      <View style={styles.container}>
      <Text style={styles.inputext}>Sample Login Form</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
           label='Email'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          label='Password'
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind()}
        />
      </View>

      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
  },
  input: {
    
  },
  inputext: {
    
  },
});