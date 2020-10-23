import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Alert, Image} from 'react-native';
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
    <View style={{flex:1}}>
    <View style={{alignSelf:'center', marginTop:-50}}>
      <Button 
        style={{ height:65, width:350, backgroundColor:'white', borderColor: '#cdcdcd'}}
        Button onPress={() => googleSignIn()}
        activeOpacity={1}
        
        >
        <View style={{ alignItems:'center', flex:1, flexDirection:'row'}} >
          <View style={{ marginRight:26, marginLeft:26}}>
            <Image source={require('../../../assets/icons/GoogleLogo.png')} style={{height:40, width:39}} />
          </View>
          <View style={{marginRight:30}}>
            <Image source={require('../../../assets/icons/loginBorder.png')} style={{height:62}}/>
          </View>
            <Text style={{fontFamily:'NanumBarunGothicBold', fontSize:20}}>  구글 아이디로 로그인</Text>
        </View>
      </Button>
    </View>
    
  </View>

  );
};

export default Google_Button;

const styles = StyleSheet.create({
  container: {},
  input: {},
  inputext: {},
});
