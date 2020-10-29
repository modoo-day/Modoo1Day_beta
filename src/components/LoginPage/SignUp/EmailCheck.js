import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Alert} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

function EmailValid({navigation}) {
  // 이메일 주소 확인 정규식 확정
  const emailReg = /^[A-z|0-9]([A-z|0-9]*)(@)([A-z]*)(\.)([A-z]*)$/;

  const USR_TB = firestore().collection('USR_TB');

  const [isEmail, setisEmail] = useState(false);
  const [email, setEmail] = useState('');

  const [wrong, setWrong] = useState('');

  // 이메일 형식 체크
  function checkEmail(text) {
    setEmail(text);
    if (emailReg.test(text)) {
      setisEmail(true);
      setWrong('');
    } else {
      setisEmail(false);
      setWrong('올바르지 않은 이메일 주소입니다.');
    }
  }

  /* ----------------------- */
  /* Email Format inspection */
  /* ----------------------- */

  // 이메일이 기존에 사용 중인지 확인하는 함수
  function inspectEmail() {
    USR_TB.where('email', '==', email)
      .get()
      .then((snapshot) => {
        console.log('inspectation start');
        if (snapshot.empty) {
          // DB에 유저 정보 없으면
          console.log(email, ': DB empty');
          sendEmail();
          console.log('sending Success');
        }
        snapshot.forEach((doc) => {
          // DB에 유저 정보 있으면
          console.log(email, 'DB filled');
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Firebase API Server에 Token 발급 요청
  function reqEmailVerify() {
    fetch('http://192.168.43.233:8000/reqGenToken/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reqEmail: email,
      }),
    })
      .then((res) => {
        // Fetch 후 서버에서 결과 받아오면.
        res.json().then((data) => {
          setWrong(data.result);
          if (data.result == 'success') {
            console.log(data);
            setWrong('메일이 전송됐습니다. 메일함을 확인하세요.');
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // 계속하기 버튼 누르면 검증된 사용자인지 확인.
  function checkMailVerified() {
    fetch('http://192.168.43.233:8000/checkMailVerified/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reqEmail: email,
      }),
    })
      .then((res) => {
        // Fetch 후 서버에서 결과 받아오면.
        res.json().then((data) => {
          console.log(data.resPost);
          // 검증된 이메일 주소인지 확인.
          if (data.resPost == 'yes') {
            Alert.alert('통과됨.');
          } else {
            Alert.alert('통과안됨.');
          }
        });
      })
      .catch((err) => {
        if (err.toString() == 'TypeError: Network request failed') {
          Alert.alert('네트워크 오류입니다.');
        } else {
          console.log(err);
        }
      });
  }

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.h1}>행복은 습관이</Text>
          <Text style={styles.h1}>될 수 있습니다!</Text>
          <Text style={styles.h2}>먼저 로그인이 필요해요 ^^</Text>
        </View>

        {/* Body */}
        <View style={styles.body}>
          <View style={styles.bodyView}>
            <TextInput
              style={styles.bodyTextInput}
              placeholder="사용하는 이메일을 입력하세요"
              onChangeText={(text) => checkEmail(text)}
              value={email}
            />
            <Button
              onPress={reqEmailVerify}
              compact={true}
              color={'black'}
              disabled={!isEmail}>
              <Text style={{fontFamily: 'neodgm'}}>이메일인증</Text>
            </Button>
          </View>

          {/* Email Format Checker */}
          <Text>{wrong}</Text>

          {/* Keep going button */}
          <View style={styles.bodyView}>
            <Button
              onPress={checkMailVerified}
              // onPress={() =>
              //   navigation.navigate('PasswordCheck', {email: email})
              // }
              color={'black'}>
              <Text style={styles.bodyText}>계속하기</Text>
            </Button>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: RFPercentage(20),
    height: RFPercentage(15),
  },
  h1: {
    marginTop: '5%',
    fontSize: RFPercentage(6),
    fontFamily: 'neodgm',
  },
  h2: {
    marginTop: '5%',
    fontSize: RFPercentage(2),
    fontFamily: 'neodgm',
    marginBottom: '5%',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bodyView: {
    marginTop: '8%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyTextInput: {
    width: '70%',
    height: RFPercentage(6),
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 30,
    fontFamily: 'neodgm',
    textAlign: 'center',
  },
  bodyText: {
    fontSize: RFPercentage(4),
    fontFamily: 'neodgm',
    textAlign: 'center',
  },
});

export default EmailValid;

/* ------------- */
/* Sending Email */
/* ------------- */
// const actionCodeSettings = {
//   // Firebase Hosting
//   url: 'https://modoo1daybeta.firebaseapp.com',
//   handleCodeInApp: true, // This must be true.
//   // iOS: {
//   // bundleId: 'com.example.ios',
//   // },
//   android: {
//     packageName: 'com.modoo1day_beta',
//     installApp: true,
//     minimumVersion: '12',
//   },
//   // Firebase Dynamic Link
//   dynamicLinkDomain: 'modoo1daybeta.page.link',
// };

//   async function sendEmail() {
//   await auth()
//     .sendSignInLinkToEmail(email, actionCodeSettings)
//     .then(function () {
//       // 자바스크립트에서 이메일 로그인 정보를
//       // 로컬에 저장해서 계속 쓸 수 있게
//       AsyncStorage.setItem('emailForSignIn', email);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
