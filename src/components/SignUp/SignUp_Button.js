import React from 'react';
import {Text} from 'react-native'
import Button from 'apsl-react-native-button';
import auth from '@react-native-firebase/auth';

const SignUp_Button = function ({email, password}) {
  async function CreateEmailAuth() {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Button
      onPress={() => CreateEmailAuth()}
      style={{width: '25%', borderColor: 'lightgray'}}>
      <Text>회원가입</Text>
    </Button>
  );
};

export default SignUp_Button;

/* 이메일 패스워드로 로그인.
    try {
      await auth().signInWithEmailAndPassword('a@a.com', 'aa1234');
    } catch (e) {
      console.log(e);
    }
    */

/* 이메일 패스워드로 회원가입.
    try {
      await auth().createUserWithEmailAndPassword('a@a.com', 'aa1234');
    } catch (e) {
      console.log(e);
    }
    */
