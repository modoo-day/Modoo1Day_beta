import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

// var actionCodeSettings = {
//   // URL you want to redirect back to. The domain (www.example.com) for this
//   // URL must be whitelisted in the Firebase Console.
//   url: 'noreply@modoo1daybeta.firebaseapp.com',
//   handleCodeInApp: true, // This must be true.
//   /* iOS: {
//     bundleId: 'com.example.ios',
//   }, */
//   android: {
//     packageName: 'com.modoo1day_beta',
//     installApp: true,
//     minimumVersion: '12',
//   },
//   /* dynamicLinkDomain: 'example.page.link', */
// };

function EmailValid({navigation}) {
  const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const [isEmail, setisEmail] = useState(false);
  const [email, setEmail] = useState('');

  const [wrong, setWrong] = useState('');
  const [finish, setfinish] = useState('계속하기');

  function checkEmail(text) {
    setEmail(text);
    if (emailReg.test(text)) {
      setisEmail(true);
      setWrong('');
    } else {
      setisEmail(false);
      setWrong('이메일 형식 오류// 정규식 추후 수정필요');
    }
  }
  
  // function sendEmail() {
  //   try {
  //     auth()
  //       .sendSignInLinkToEmail(email, actionCodeSettings)
  //       .then(function () {
  //         // The link was successfully sent. Inform the user.
  //         // Save the email locally so you don't need to ask the user for it again
  //         // if they open the link on the same device.
  //         window.localStorage.setItem('emailForSignIn', email);
  //       })
  //       .catch(function (error) {
  //         // Some error occurred, you can inspect the code: error.code
  //         console.log(error);
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <>
      <View style={styles.container}>
        {/* ------ */}
        {/* Header */}
        {/* ------ */}
        <View style={styles.header}>
          <Text style={styles.h1}>행복은 습관이</Text>
          <Text style={styles.h1}>될 수 있습니다!</Text>
          <Text style={styles.h2}>먼저 로그인이 필요해요 ^^</Text>
        </View>
        {/* ---- */}
        {/* Body */}
        {/* ---- */}
        <View style={styles.body}>
          <View style={styles.bodyView}>
            <TextInput
              style={styles.bodyTextInput}
              placeholder="사용하는 이메일을 입력하세요"
              onChangeText={(text) => checkEmail(text)}
              value={email}
            />
            <Button
              onPress={() => sendEmail()}
              compact={true}
              color={'black'}>
              <Text style={{fontFamily: 'neodgm'}}>이메일인증</Text>
            </Button>
          </View>

          {/* -------------------- */}
          {/* Email Format Checker */}
          {/* -------------------- */}
          <Text>{wrong}</Text>

          {/* ----------------- */}
          {/* Keep going button */}
          {/* ----------------- */}
          <View style={styles.bodyView}>
            <Button
              onPress={() =>
                navigation.navigate('PasswordCheck', {email: email})
              }
              color={'black'}>
              <Text style={styles.bodyText}>{finish}</Text>
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
