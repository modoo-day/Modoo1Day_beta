import auth from '@react-native-firebase/auth';

function CreateEmailAuth() {
  var email;
  var password;
  
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (e) {
    console.log(e);
  }
}

export default CreateEmailAuth;

/* 이메일 패스워드로 로그인.
    try {
      await auth().signInWithEmailAndPassword('a@a.com', 'aa1234');
    } catch (e) {
      console.log(e);
    }
    */

/* 이메일 패스워드로 회원가입.
    try {
      await auth().createUserWithEmailAndPassword('a@a.com', 'aa1234');
    } catch (e) {
      console.log(e);
    }
    */
