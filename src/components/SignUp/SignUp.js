import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import SignUp_Button from './SignUp_Button';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome!</Text>
      </View>

      <View style={styles.body}>
        <TextInput style={styles.bodyTextInput} placeholder="닉네임" />
        <TextInput
          style={styles.bodyTextInput}
          placeholder="이메일"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.bodyTextInput}
          placeholder="비밀번호"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TextInput style={styles.bodyTextInput} placeholder="비밀번호 확인" />
      </View>

      <View style={styles.footer}>
        <SignUp_Button {...{email, password}} />
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
  bodyTextInput: {
    fontSize: 15,
    marginVertical: '1%',
    paddingLeft: '5%',
    borderWidth: 1,
    borderColor: 'lightgray',
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

// 이메일 형식 검사 ,, @ 없으면 빡구

// 비밀번호 firebase공식문서 인증종류 자체제공이메일 비밀번호 솔류션 요구하는 비밀번호 최소조건
