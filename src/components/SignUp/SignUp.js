import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image, Linking} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import SignUp_Button from './SignUp_Button';

function SignUp() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState('');

  const [isSelected, setSelection] = useState(false);

  const oIcon = require('../../assets/icons/o.png');
  const xIcon = require('../../assets/icons/x.png');

  /* 정규 표현식 조건에 맞는지 확인하는 아이콘 */
  const [nicknameIcon, setnicknameIcon] = useState(xIcon);
  const [emailIcon, setemailIcon] = useState(xIcon);
  const [passwordIcon, setpasswordIcon] = useState(xIcon);
  const [passwordValidIcon, setpasswordValidIcon] = useState(xIcon);

  const [isNickname, setisNickname] = useState(false);
  const [isEmail, setisEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const [isPasswordValid, setisPasswordValid] = useState(false);

  function checkNickname(text) {
    setNickname(text);
    /* 한글,영문 대소문자 2~15자리 */
    const nameReg = /^[가-힣A-Za-z]{2,15}$/;
    setnicknameIcon(nameReg.test(text) ? oIcon : xIcon);
    setisNickname(nameReg.test(text) ? true : false);
  }

  function checkEmail(text) {
    setEmail(text);
    /* 이메일 형식 */
    const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailReg.test(text)) {
      setemailIcon(oIcon);
      setisEmail(true);
    } else {
      setemailIcon(xIcon);
      setisEmail(false);
    }
  }

  function checkPassword(text) {
    setPassword(text);
    /* 최소 하나의 문자, 숫자, 특수문자(~!@#$%^&*) 8자 이상*/
    const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,}$/;
    if (passwordReg.test(text)) {
      setpasswordIcon(oIcon);
      setisPassword(true);
    } else {
      setpasswordIcon(xIcon);
      setisPassword(false);
    }
    /* 비밀번호 확인도 같이 체크 */
    if (passwordValid === text && passwordReg.test(text)) {
      setpasswordValidIcon(oIcon);
      setisPasswordValid(true);
    } else {
      setpasswordValidIcon(xIcon);
      setisPasswordValid(false);
    }
  }

  function checkPasswordValid(text) {
    setPasswordValid(text);
    const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,}$/;
    if (password === text && passwordReg.test(password)) {
      setpasswordValidIcon(oIcon);
      setisPasswordValid(true);
    } else {
      setpasswordValidIcon(xIcon);
      setisPasswordValid(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome!</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyView}>
          {/* 이미지 먼저 들어가야 TextInput이 맨 앞으로 감 */}
          <Image source={nicknameIcon} style={styles.bodyImage} />
          <TextInput
            style={styles.bodyTextInput}
            placeholder="닉네임"
            maxLength={12} // 최대 12자
            onChangeText={(text) => checkNickname(text)}
            value={nickname}
          />
        </View>
        <View style={styles.bodyView}>
          <Image source={emailIcon} style={styles.bodyImage} />
          <TextInput
            style={styles.bodyTextInput}
            placeholder="이메일"
            onChangeText={(text) => checkEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.bodyView}>
          <Image source={passwordIcon} style={styles.bodyImage} />
          <TextInput
            style={styles.bodyTextInput}
            placeholder="비밀번호"
            secureTextEntry={true} // 비밀번호 **** 표시로 가려주는 Props
            maxLength={15} // 최대 15자
            onChangeText={(text) => checkPassword(text)}
            value={password}
          />
        </View>
        <View style={styles.bodyView}>
          <Image source={passwordValidIcon} style={styles.bodyImage} />
          <TextInput
            style={styles.bodyTextInput}
            placeholder="비밀번호 확인"
            secureTextEntry={true} // 비밀번호 **** 표시로 가려주는 Props
            maxLength={15} // 최대 15자
            onChangeText={(text) => checkPasswordValid(text)}
            value={passwordValid}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '5%',
          backgroundColor: 'lightyellow',
        }}>
        <CheckBox
          disabled={false}
          value={isSelected}
          onValueChange={(newValue) => setSelection(newValue)}
        />
        <Text
          style={{color: 'steelblue', fontFamily: 'neodgm'}}
          /* 이용약관 페이지 추가해야함 */
          onPress={() => Linking.openURL('http://google.com')}>
          이용약관
        </Text>
        <Text style={{fontFamily: 'neodgm'}}>에 동의합니다.</Text>
      </View>

      <View style={styles.footer}>
        <SignUp_Button // custom Button
          {...{
            nickname, // props 전달
            email,
            password,
            passwordValid,
            isNickname,
            isEmail,
            isPassword,
            isPasswordValid,
            isSelected,
          }}
        />
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
    alignItems: 'center',
    paddingBottom: '10%',
    backgroundColor: 'lightyellow',
  },
  headerText: {
    fontSize: 50,
    fontFamily: 'neodgm',
  },
  body: {
    paddingHorizontal: '15%',
    backgroundColor: 'lightyellow',
  },
  bodyView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    marginVertical: '1%',
    backgroundColor: 'mintcream',
  },
  bodyTextInput: {
    width: '100%',
    fontSize: 15,
    fontFamily: 'neodgm',

    paddingLeft: '5%',
  },
  bodyImage: {
    position: 'absolute',
    left: '85%',
    width: '10%',
    height: '10%',
    padding: '50%',
  },
  footer: {
    flex: 3,
    flexDirection: 'row-reverse',
    paddingHorizontal: '15%',
    paddingTop: '5%',
    backgroundColor: 'lightyellow',
  },
});

export default SignUp;
