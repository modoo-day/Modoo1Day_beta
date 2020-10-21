import React from 'react';
import {Text} from 'react-native';
import Button from 'apsl-react-native-button';
import auth from '@react-native-firebase/auth';

const SignUp_Button = function ({
  nickname,
  email,
  password,
  passwordValid,
  isNickname,
  isEmail,
  isPassword,
  isPasswordValid,
  isSelected,
}) {
  /* Firebase에 계정/비밀번호 추가 */
  async function CreateEmailAuth() {
    if (!isNickname || !isEmail || !isPassword || !isPasswordValid || !isSelected) {
      alert("양식이 맞지 않습니다");
      return console.log('wrong format');
    } else {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
      } catch (e) {
        console.log(e);
      }
    }
  }

  /* 회원가입 버튼 */
  return (
    <Button
      onPress={() => CreateEmailAuth()}
      style={{width: '100%', borderColor: 'lightgray', backgroundColor: 'paleturquoise'}}>
      <Text style={{fontFamily: 'neodgm',}}>회원가입</Text>
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
