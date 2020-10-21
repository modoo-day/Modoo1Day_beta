import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import SignUp_Button from './SignUp_Button';

function SignUp() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState('');

  /* 정규 표현식 조건에 맞는지 확인하는 아이콘 */
  const [nicknameIcon, setnicknameIcon] = useState(
    require('../../assets/icons/x.png'),
  );
  const [emailIcon, setemailIcon] = useState(
    require('../../assets/icons/x.png'),
  );
  const [passwordIcon, setpasswordIcon] = useState(
    require('../../assets/icons/x.png'),
  );
  const [passwordValidIcon, setpasswordValidIcon] = useState(
    require('../../assets/icons/x.png'),
  );
  
  const [isNickname, setisNickname] = useState(false)
  const [isEmail, setisEmail] = useState(false)
  const [isPassword, setisPassword] = useState(false)
  const [isPasswordValid, setisPasswordValid] = useState(false)


  function checkNickname(text) {
    setNickname(text);
    /* 한글,영문 대소문자 2~15자리 */
    const nameReg = /^[가-힣A-Za-z]{2,15}$/;
    if (nameReg.test(text)) {
      setnicknameIcon(require('../../assets/icons/o.png'));
      setisNickname(true);
    } else {
      setnicknameIcon(require('../../assets/icons/x.png'));
      setisNickname(false);
    }
  }

  function checkEmail(text) {
    setEmail(text);
    /* 이메일 형식 */
    const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailReg.test(text)) {
      setemailIcon(require('../../assets/icons/o.png'));
      setisEmail(true);
    } else {
      setemailIcon(require('../../assets/icons/x.png'));
      setisEmail(false);
    }
  }

  function checkPassword(text) {
    setPassword(text);
    /* 최소 하나의 문자, 숫자, 특수문자(~!@#$%^&*) 8자 이상*/
    const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,}$/;
    if (passwordReg.test(text)) {
      setpasswordIcon(require('../../assets/icons/o.png'));
      setisPassword(true);
    } else {
      setpasswordIcon(require('../../assets/icons/x.png'));
      setisPassword(false);
    }
    /* 비밀번호 확인도 같이 체크 */
    if (passwordValid===text) {
      setpasswordValidIcon(require('../../assets/icons/o.png'));
      setisPasswordValid(true);
    } else {
      setpasswordValidIcon(require('../../assets/icons/x.png'));
      setisPasswordValid(false);
    }

  }

  function checkPasswordValid(text) {
    setPasswordValid(text);
    if (password===text) {
      setpasswordValidIcon(require('../../assets/icons/o.png'));
      setisPasswordValid(true);
    } else {
      setpasswordValidIcon(require('../../assets/icons/x.png'));
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
            maxLength={12}  // 최대 12자
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
            maxLength={15}  // 최대 15자
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
            maxLength={15}  // 최대 15자
            onChangeText={(text) => checkPasswordValid(text)}
            value={passwordValid}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <SignUp_Button    // custom Button
          {...{
            nickname,     // props 전달
            email,
            password,
            passwordValid,
            isNickname,
            isEmail,
            isPassword,
            isPasswordValid,
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
    width: '100%',
    fontSize: 15,
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
    paddingHorizontal: '10%',
    paddingTop: '5%',
  },
  footerButton: {
    width: '25%',
    borderColor: 'lightgray',
  },
});

export default SignUp;
