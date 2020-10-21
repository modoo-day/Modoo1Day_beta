import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Bottom extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'black',
          justifyContent: 'space-between',
        }}>
        <Button title={'회원가입'}></Button>
        <Button title={'아이디/비밀번호 찾기'}></Button>
      </View>
    );
  }
}

export default Bottom;
