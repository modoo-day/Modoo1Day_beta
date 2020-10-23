import React, {useState} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ProfilePage = () => {
  const [usrInfo, setUsrInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nottriggered, setNottriggered] = useState(true);

  const USR_TB = firestore().collection('USR_TB');
  const user = auth().currentUser;
  // 해당 uid 유저 정보 불러오기.
  const getUsrInfo = () => {
    USR_TB.where('uid', '==', user.uid)
      .get()
      .then((snapshot) => {
        console.log('******* USR_TB Where 작동. *******');
        if (snapshot.empty) {
          // DB에 유저 정보 없으면 정보 채워 넣는 곳으로 가야 됨.
          console.log('해당하는 유저 정보가 없습니다.');
          return;
        }
        snapshot.forEach((doc) => {
          setUsrInfo(doc._data);
        });
      })
      .then(() => {
        console.log('불러온 유저 정보는:', usrInfo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 로딩이 안되었을시 로딩중 화면 띄우고, getUsrInfo 불러옴.
  if (loading) {
    console.log('로딩 안돼서 정보 불러옴.');
    if (nottriggered) {
      setNottriggered(false);
      getUsrInfo();
    }
    return (
        /* 여기에 그냥 로딩하는 애니메이션 넣으면 될 것 같다. 아니면 로딩중... 넣든가 */
      <View>
        <Text>로딩중</Text>
      </View>
    );
  }

  return (
      // 꾸며주세용
    <View>
      <Text>이름: {usrInfo.name}</Text>
      <Text>전화번호: {usrInfo.PhoneNum}</Text>
      <Text>이메일:</Text>
      <Text>가입 시간: </Text>
      <Text>레벨:</Text>
      <Text>성별:</Text>
      <Text>이름:</Text>
      <Text>이름:</Text>
    </View>
  );
};

export default ProfilePage;
