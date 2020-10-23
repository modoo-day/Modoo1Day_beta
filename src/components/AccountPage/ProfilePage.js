import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ProfilePage = () => {
  const USR_TB = firestore().collection('USR_TB');
  var user = auth().currentUser;
  var usrInfo = [];
  console.log(user.uid);
  // 해당 uid 유저 정보 불러오기.
  const getUsrInfo = () => {
    var a = USR_TB.where('uid', '==', user.uid)
      .get()
      .then((snapshot) => {
        console.log('해당 uid info:', snapshot);
        snapshot.forEach((doc) => {
          usrInfo = doc;
        });
        console.log('불러온 유저 정보는:', usrInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getUsrInfo();

  return (
    <View>
      <Text>이름:</Text>
      <Text>전화번호:</Text>
      <Text>이메일:</Text>
      <Text>가입 날짜:</Text>
      <Text>레벨:</Text>
      <Text>성별:</Text>
      <Text>이름:</Text>
      <Text>이름:</Text>
    </View>
  );
};

export default ProfilePage;
