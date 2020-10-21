import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Auth} from '@react-native-firebase/auth';

const LoginFunctions = () => {
  // 구글 계정 정보 받아오기.
  const [usrInfo_G, setUsrInfo_G] = useState('');

  // 구글 계정 정보 받아오기.
  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUsrInfo_G(userInfo);
      console.log('유저인포', userInfo);
    } catch (error) {
      console.log(error);
      // 유저가 로그인 창을 닫음.
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('유저가 로그인 창을 닫았습니다.');

        // 이미 로그인이 진행중임.
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('이미 로그인이 진행 중입니다.');

        // 구글 플레이 서비스가 낡았거나 안깔려있음.
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('구글 플레이 서비스를 업데이트 해주세요.');

        // 이거는 제발 안떴으면 좋겠다.
      } else {
        console.log('알 수 없는 오류:', error);
      }
    }
  };

  // Firebase Auth 시작. usrInfo에서 Credential 받아오기.
  var credential = auth.GoogleAuthProvider.credential(usrInfo_G.idToken);
  auth()
    .signInWithCredential(credential)
    .catch(function (error) {
      // 로그인 과정에서 오류
      console.log('Credential을 넘기는 과정에서 오류가 남.', error);

      /*
        나중에 이런 오류처리 변수들을 사용해야 할 일이 생기면 사용.
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      */
    });
};

export default LoginFunctions;
