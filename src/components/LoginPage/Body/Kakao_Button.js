import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Button from 'apsl-react-native-button';
import KakaoLogins, {KAKAO_AUTH_TYPES} from '@react-native-seoul/kakao-login';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
        
        // 로그인 성공
        console.log('카카오 로그인 성공', result);
      })
      .then(() => {
        // 여기서부터가 API 서버애서 verifyToken 불러오는 법.
        // 밑 ip주소는 와이파이마다 달라짐. Firebase REST API 쓰려면 돈 내고 업로드해야함.
        fetch('http://10.12.101.33:8000/'.concat('verifyToken?token=', token), {
          method: 'POST',
        })
          .then((response) => {
            response.json().then((responseText) => {
              console.log('입력받은 토큰을 넣기 시작');
              auth()
                .signInWithCustomToken(responseText.firebase_token)
                .catch(function (error) {
                  console.log('에러남.', error);
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // ...
                  return;
                });
              console.log('카카오 Firebase 로그인 완료.');
            });
            // console.log(response);
          })
          .catch((error) => {
            console.log('에러', error);
          });
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
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={kakaoLogin}>
          <Image
            source={require('../../../assets/icons/kakaoLogin.png')}
            style={styles.button}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Kakao_Button;

const styles = StyleSheet.create({
  buttonContainer: {},
  button: {
    alignSelf: 'center',
    width: '80%',
    height: 50,
  },
  textStyle: {},
});
