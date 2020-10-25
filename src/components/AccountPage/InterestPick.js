import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from './ProfilePage';
import auth from '@react-native-firebase/auth';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Button from 'apsl-react-native-button';

const InterestPick = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.upView}>
        <Text style={styles.inText}></Text>

        <Text style={styles.titleText}>나의 관심사를</Text>
        <Text style={styles.titleText}>3개 선택해볼까요?</Text>

        <Text style={styles.inText}>
          {'\n'}관심사에 맞는 습관을 추천해드려요!
        </Text>
      </View>
      <View style={styles.midView}>
        {/* 버튼들 전부 배열 시작단계 */}
        <View style={styles.btnView}>
          {/* 최상층 버튼 배열 */}
          <View style={{flex: 0.2}}></View>
          <View style={styles.btn_singleView}>
            <Button style={styles.intBtn}>가족 👨‍👨‍👧‍👦</Button>
          </View>
          <View style={{flex: 0.2}}></View>
          <View style={styles.btn_singleView}>
            <Button style={styles.intBtn}>친구 ✌</Button>
          </View>
          <View style={{flex: 0.2}}></View>
          <View style={styles.btn_singleView}>
            <Button style={styles.intBtn}>애인 💑</Button>
          </View>
          <View style={{flex: 0.2}}></View>
        </View>
        <View style={styles.btnView}>
          {/* B1층 버튼 배열 */}
          <View style={{flex: 0.2}}></View>
          <View style={styles.btn_singleView}>
            <Button style={styles.intBtn}>뷰티 🛁</Button>
          </View>
          <View style={{flex: 0.2}}></View>
          <View style={styles.btn_singleView}>
            <Button style={styles.intBtn}>건강 / 운동 💪</Button>
          </View>
          <View style={{flex: 0.2}}></View>
        </View>
        <View style={styles.btnView}>
          {/* B2층 버튼 배열 */}
          <View style={{flex: 0.2}}></View>
          <View style={styles.btn_singleView}>
            <Button style={styles.intBtn}>공부 ✍</Button>
          </View>
          <View style={{flex: 0.2}}></View>
          <View style={styles.btn_singleView}>
            <Button style={styles.intBtn}>자기계발 🎨</Button>
          </View>
          <View style={{flex: 0.2}}></View>
        </View>
        <View style={styles.btnView}>
          {/* B3층 버튼 배열 */}
          <View style={{flex: 0.2}}></View>
          <View style={styles.btn_singleView}>
            <Button style={styles.intBtn}>라이프스타일 🎈</Button>
          </View>
          <View style={{flex: 0.2}}></View>
          <View style={styles.btn_singleView}>
            <Button style={styles.intBtn}>기타 🙂</Button>
          </View>
          <View style={{flex: 0.2}}></View>
        </View>
      </View>
      <View style={styles.downView}>
        <View style={{flex: 0.2}}></View>
        <View style={{flex: 1}}>
          <Button style={styles.intBtn}>선택 완료!</Button>
        </View>
        <View style={{flex: 0.2}}></View>
      </View>
    </View>
  );
};

{
  /* <TouchableOpacity onPress={() => navigation.push('EmailLoginPage')}>
        <Image
          source={require('../../assets/icons/emailLogin.png')}
          style={styles.button}
          resizeMode={'contain'}
        />
      </TouchableOpacity> */
}
const styles = StyleSheet.create({
  upView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  midView: {
    flex: 4,
  },
  downView: {
    flex: 2,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnView: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btn_singleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  titleText: {
    fontSize: 30,
  },
  inText: {
    fontSize: 14,
  },
  footText: {
    fontFamily: 'neodgm',
    fontSize: RFPercentage(1.2),
    textAlign: 'center',
  },
  //버튼
  intBtn: {
    backgroundColor: 'white',
    borderRadius: 30,
  },
});
export default InterestPick;
