import React from 'react';
import {View, Text} from 'react-native';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from './ProfilePage';
import auth from '@react-native-firebase/auth';

// AccountPage - 현재 로그인 상태 확인하고, 로그인 상태 따라서 행동 바뀌어야 됨.

const AccountPage = () => {
  auth().signInWithPhoneNumber('+821076535075');
  var user = auth().currentUser;
  // 로그인 되어있으면 프로필 페이지로 이동.
  if (user) {
    console.log('프로필 페이지로 이동중');
    return <ProfilePage />;
  }
  console.log('로그인 페이지로 이동중');
  // 로그인 안되어 있으면 로그인 페이지 뜨기.
  return <LoginPage />;

  /* 
        // 로그인 상태 변경시 - 관찰자인데, 지금은 필요 없나..?
        function onAuthStateChanged(user) {
            console.log('로그인됐나', user);
        }

        // 로그인 상태 변화 잡아내기. Firebase Auth 수준에서 변화가 일어나면 실행된다.
        useEffect(() => {
            const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
            return subscriber; // Unmount시 Unsubscribe
        }, []);
     */
};

export default AccountPage;
