import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Button from 'apsl-react-native-button';
import KakaoLogins, {KAKAO_AUTH_TYPES} from '@react-native-seoul/kakao-login';
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      .then(() => {
        // 여기서부터가 API 서버애서 verifyToken 불러오는 법.
        // 밑 ip주소는 와이파이마다 달라짐. Firebase REST API 쓰려면 돈 내고 업로드해야함.
        fetch('http://172.20.10.8:8000/'.concat('verifyToken?token=', token), {
          method: 'POST'
        })
          .then((response) => {
            response
              .json()
              .then((responseText) => {
                console.log('입력받은 토큰을 넣기 시작');
                auth()
                  .signInWithCustomToken(responseText.firebase_token)
                  .catch(function (error) {
                    console.log('에러남.', error);
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                  });
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
    <View style={{flex:1}}>
      <View style={{alignSelf:'center'}}>
        <Button 
          style={{ height:65, width:350, backgroundColor:'#ffdc00', borderColor: '#bfa500'}}
          onPress={kakaoLogin}
          activeOpacity={1}
          
          >
          <View style={{ alignItems:'center', flex:1, flexDirection:'row'}} >
            <View style={{ marginRight:26, marginLeft:26}}>
              <Image source={require('../../../assets/icons/KakaoLogo.png')} style={{height:35, width:39}} />
            </View>
            <View style={{marginRight:30}}>
              <Image source={require('../../../assets/icons/loginBorder.png')} style={{height:62}}/>
            </View>
              <Text style={{fontFamily:'NanumBarunGothicBold', fontSize:20}}>카카오 아이디로 로그인</Text>
          </View>
        </Button>
      </View>
      
    </View>
    
  );
};

export default Kakao_Button;

