import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from 'apsl-react-native-button';
import KakaoLogins, {KAKAO_AUTH_TYPES} from '@react-native-seoul/kakao-login';

const Kakao_Button = function () {
  const kakaoLogin = () => {
    // 카카오 로그인 시작
    console.log('카카오 로그인 시작');

    // Access Token 리턴값 저장
    var token;

    KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
      .then((result) => {
        // 토큰 저장
        token = result.accessToken;
        // setToken(result.accessToken);

        // 로그인 성공
        console.log('카카오 로그인 성공', result);
      })
      .catch((err) => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          console.log('카카오 로그인 취소', err);
        } else {
          // 로그인 실패
          console.log('카카오 로그인 실패', err);
        }
      });
  };

  return (
    <Button style={{backgroundColor: 'skyblue'}} onPress={kakaoLogin}>
      <View>
        <Text>카카오 로그인</Text>
      </View>
    </Button>
  );
};

export default Kakao_Button;

const styles = StyleSheet.create({
  container: {},
  input: {},
  inputext: {},
});
