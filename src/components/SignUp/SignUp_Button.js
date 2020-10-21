import React from 'react';
import {Text} from 'react-native';
import Button from 'apsl-react-native-button';
import auth from '@react-native-firebase/auth';

const SignUp_Button = function ({
  enickname,
  email,
  password,
  pwdcheck,
  isEmail,
  isPassword,
  isCheck,
}) {
  var isValid;
  /* Firebase에 계정/비밀번호 추가 */
  async function CreateEmailAuth() {
    if ((!isEmail)||(!isPassword)||(!isCheck)) { alert("nope"); return 0; }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('created');
    } catch (e) {
      console.log(e);
    }
  }

  /* 회원가입 버튼 */
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
