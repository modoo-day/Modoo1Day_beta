import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import Button from 'apsl-react-native-button';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '981107116909-rc1qb6m90iv10mcd5uci7ff7o7d6k9ft.apps.googleusercontent.com',
});

const Google_Button = function () {
  // 구글 계정 정보 받아오기.
  const googleSignIn = async () => {
    console.log('구글 로그인 시작.');
    var userInfo; // 유저인포 임시저장.
    try {
      await GoogleSignin.hasPlayServices();
      userInfo = await GoogleSignin.signIn();
      // 콘솔 로그에 전체 정보 찍기
      console.log('유저 정보 불러옴:', userInfo);

      // 사용자 Alert로 이름 보여주기
      Alert.alert(
        '유저 정보 불러옴.',
        userInfo.user.familyName,
        [
          {
            text: '취소',
            onPress: () => console.log('취소됨'),
          },
          {
            text: '확인',
            onPress: () => console.log('확인됨'),
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      console.log(error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // 유저가 로그인 창을 닫음.
        console.log('유저가 로그인 창을 닫았습니다.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // 이미 로그인이 진행중임.
        console.log('이미 로그인이 진행 중입니다.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // 구글 플레이 서비스가 낡았거나 안깔려있음.
        console.log('구글 플레이 서비스를 업데이트 해주세요.');
      } else if (error.code === 7) {
        // 네트워크 오류.
        console.log('네트워크 오류입니다. 인터넷 연결 상태를 확인해 주세요.');
      } else {
        // 이거는 제발 안떴으면 좋겠다.
        console.log('알 수 없는 오류:', error.code, error);
      }
      return;
    }
    // Firebase Auth 시작. usrInfo에서 Credential 받아오기.
    var credential = auth.GoogleAuthProvider.credential(userInfo.idToken);
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

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => googleSignIn()}>
          <Image
            source={require('../../../assets/icons/googleLogin.png')}
            style={styles.button}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Google_Button;

const styles = StyleSheet.create({
  buttonContainer: {},
  button: {
    alignSelf: 'center',
    width: '80%',
    height: 50,
  },
  textStyle: {},
});
