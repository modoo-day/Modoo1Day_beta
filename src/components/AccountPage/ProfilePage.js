import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ProfilePage = ({navigation}) => {
  const [usrInfo, setUsrInfo] = useState([]);
  //const [usrRealInfo, setUsrRealInfo] = useState('');

  const [loading, setLoading] = useState(true);
  const [nottriggered, setNottriggered] = useState(true);

  const [credential, setCredential] = useState();

  const USR_TB = firestore().collection('USR_TB');
  const USR_UID_C = firestore().collection('USR_UID_C');

  const user = auth().currentUser;

  var usrRealInfo;

  // 해당 uid 유저 정보 불러오기.
  const getUsrInfo = () => {
    USR_UID_C.where('uid', '==', user.uid)
      .get()
      .then((snapshot) => {
        console.log('******* USR_TB Where 작동. *******');
        if (snapshot.empty) {
          // DB에 유저 정보 없으면 정보 채워 넣는 곳으로 가야 됨.
          console.log('해당하는 유저 정보가 없습니다.');
          return;
        }
        snapshot.forEach((doc) => {
          
          // setUsrRealInfo(doc._data.usr_doc_id);
          usrRealInfo = doc._data.usr_doc_id;
          console.log('이거봐라', usrRealInfo);
        });
      })
      .then(() => {
        USR_TB.doc(usrRealInfo)
          .get()
          .then((snapshot) => {
            
            setUsrInfo(snapshot._data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('로그아웃 완료.');
        console.log(navigation);
      })
      .catch((err) => {
        console.log('로그아웃 에러', err);
      });
  };

  // 로딩이 안되었을시 로딩중 화면 띄우고, getUsrInfo 불러옴.
  if (loading) {
    if (nottriggered) {
      console.log('로딩 안돼서 정보 불러옴.');
      setNottriggered(false);
      getUsrInfo();
    }
    return (
      /* 여기에 그냥 로딩하는 애니메이션 넣으면 될 것 같다. 아니면 로딩중... 넣든가 */
      <View>
        {/* <Text style={{fontSize: 27}}>
          로딩중.{'\n'} 여기 View를 꾸미면 됨.{'\n'} Loading 화면은 인터넷에
          많이 돌아다님.
        </Text> */}
      </View>
    );
  }
  console.log('불러온 유저 정보는:', usrInfo);
  return (
    // 꾸며주세용

    <View>
      <Text style={{fontSize: 16}}>이름: {usrInfo.name}</Text>
      <Text style={{fontSize: 16}}>전화번호: {usrInfo.PhoneNum}</Text>
      <Text style={{fontSize: 16}}>이메일: {usrInfo.email}</Text>
      <Text style={{fontSize: 16}}>
        가입 시간: {usrInfo.SignUpTime.toDate().toString()}
      </Text>
      {/* 가입 시간 TimeStamp를 우리 눈으로 보이게 하는 변환 식은 다음과 같다. */}
      <Text style={{fontSize: 16}}>레벨: {usrInfo.level}</Text>
      <Text style={{fontSize: 16}}>성별: {usrInfo.gender}</Text>
      <Button title={'로그아웃하기.'} onPress={signOut} />
    </View>
  );
};

export default ProfilePage;
