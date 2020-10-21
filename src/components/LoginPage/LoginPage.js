
import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Bottom from './Bottom/Bottom';
import Body from './Body/Body';
import Title from "./Title/Title";


class LoginPage extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Title />
        <Body />
        <Bottom />
      </View>
    );
  }
}

export default LoginPage;
