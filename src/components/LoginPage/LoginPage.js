
import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Bottom from './Bottom/Bottom';
import Body from './body/Body';

class LoginPage extends Component {
  render() {
    return (
      <View>
        <Body />
        <Bottom />
      </View>
    );
  }
}

export default LoginPage;
