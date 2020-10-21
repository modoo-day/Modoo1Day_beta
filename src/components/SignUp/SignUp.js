import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

import SignUp_Button from './SignUp_Button';

function SignUp() {
  var isEmail, isPassword, isCheck;
  const [nicknameIcon, setnicknameIcon] = useState(require('../../assets/icons/blank.png'));
  const [emailIcon, setemailIcon] = useState(require('../../assets/icons/blank.png'));
  const [passwordIcon, setpasswordIcon] = useState(require('../../assets/icons/blank.png'));
  const [pwdcheckIcon, setpwdcheckIcon] = useState(require('../../assets/icons/blank.png'));

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [pwdcheck, setPwdcheck] = useState('');

  function checkName(text) {
    setNickname(text);
    setnicknameIcon(require('../../assets/icons/modoo.png'));
  }

  function checkEmail(text) {
    const emailReg = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    isEmail = emailReg.test(text);
    setEmail(text);
    isEmail ? setemailIcon(require('../../assets/icons/modoo.png')) : setemailIcon(require('../../assets/icons/blank.png'));
  }

  function checkPassword(text) {
    const pwdReg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    isPassword = pwdReg.test(text);
    setPassword(text);
    isPassword ? setpasswordIcon(require('../../assets/icons/modoo.png')) : setpasswordIcon(require('../../assets/icons/blank.png'));
  }

  function checkPwdcheck(text) {
    isCheck = (password===text);
    setPwdcheck(text);
    isCheck ? setpwdcheckIcon(require('../../assets/icons/modoo.png')) : setpwdcheckIcon(require('../../assets/icons/blank.png'));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome!</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyView}>
          <TextInput
            style={styles.bodyTextInput}
            placeholder="닉네임"
            onChangeText={(text) => checkName(text)}
            value={nickname}
          />
          <Image source={nicknameIcon} style={styles.bodyImage} />
        </View>
        <View style={styles.bodyView}>
          <TextInput
            style={styles.bodyTextInput}
            placeholder="이메일"
            onChangeText={(text) => checkEmail(text)}
            value={email}
          />
          <Image source={emailIcon} style={styles.bodyImage} />
        </View>
        <View style={styles.bodyView}>
          <TextInput
            style={styles.bodyTextInput}
            placeholder="비밀번호"
            onChangeText={(text) => checkPassword(text)}
            value={password}
          />
          <Image source={passwordIcon} style={styles.bodyImage} />
        </View>
        <View style={styles.bodyView}>
          <TextInput
            style={styles.bodyTextInput}
            placeholder="비밀번호 확인"
            onChangeText={(text) => checkPwdcheck(text)}
            value={pwdcheck}
          />
          <Image source={pwdcheckIcon} style={styles.bodyImage} />
        </View>
      </View>
      <View style={styles.footer}>
        <SignUp_Button {...{nickname, email, password, pwdcheck, isEmail, isPassword, isCheck}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingHorizontal: '10%',
    paddingBottom: '10%',
  },
  headerText: {
    fontSize: 35,
  },
  body: {
    paddingHorizontal: '15%',
  },
  bodyView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: '1%',
  },
  bodyTextInput: {
    width: '85%',
    fontSize: 15,
    paddingLeft: '5%',
  },
  bodyImage: {
    width: '10%',
    height: '10%',
    padding: '5%',
  },
  footer: {
    flex: 3,
    flexDirection: 'row-reverse',
    paddingHorizontal: '10%',
    paddingTop: '5%',
  },
  footerButton: {
    width: '25%',
    borderColor: 'lightgray',
  },
});

export default SignUp;
