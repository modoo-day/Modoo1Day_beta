import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from './ProfilePage';
import auth from '@react-native-firebase/auth';
import Button from 'apsl-react-native-button';
import InterestPick_btn from './InterestPick_btn';

const InterestPick = () => {
  // 각 버튼 텍스트 리소스 선언
  var dta = {
    family: {
      id: 1,
      name: '가족 👨‍👨‍👧‍👦',
    },
    friend: {
      id: 2,
      name: '친구 ✌',
    },
    couple: {
      id: 3,
      name: '애인 💑',
    },
    beauty: {
      id: 4,
      name: '뷰티 🛁',
    },
    health: {
      id: 5,
      name: '건강 / 운동 💪',
    },
    study: {
      id: 6,
      name: '공부 ✍',
    },
    upgrade: {
      id: 7,
      name: '자기계발 🎨',
    },
    lifestyle: {
      id: 8,
      name: '라이프스타일 🎈',
    },
    extra: {
      id: 9,
      name: '기타 🙂',
    },
  };

  // 체크된 버튼 개수 세는 변수
  const [ckdBtns, setCkdBtns] = useState(0);

  // 자식 버튼에서 눌리면.
  const onc = (id, ck) => {
    // 꺼져있는걸 킬때.
    if (ck === true) setCkdBtns(ckdBtns + 1);
    // 켜져있는걸 끌때.
    else setCkdBtns(ckdBtns - 1);
  };

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
            <InterestPick_btn {...dta.family} onclick={onc} hm={ckdBtns} />
          </View>
          <View style={{flex: 0.2}}></View>
          <View style={styles.btn_singleView}>
            <InterestPick_btn {...dta.friend} onclick={onc} hm={ckdBtns} />
          </View>
          <View style={{flex: 0.2}}></View>
          <View style={styles.btn_singleView}>
            <InterestPick_btn {...dta.couple} onclick={onc} hm={ckdBtns} />
          </View>
          <View style={{flex: 0.2}}></View>
        </View>
        <View style={styles.btnView}>
          {/* B1층 버튼 배열 */}
          <View style={{flex: 0.3}}></View>
          <View style={{flex: 0.8}}>
            <InterestPick_btn {...dta.beauty} onclick={onc} hm={ckdBtns} />
          </View>
          <View style={{flex: 0.1}}></View>
          <View style={{flex: 0.9}}>
            <InterestPick_btn {...dta.health} onclick={onc} hm={ckdBtns} />
          </View>
          <View style={{flex: 0.2}}></View>
        </View>
        <View style={styles.btnView}>
          {/* B2층 버튼 배열 */}
          <View style={{flex: 0.3}}></View>
          <View style={{flex: 0.8}}>
            <InterestPick_btn {...dta.study} onclick={onc} hm={ckdBtns} />
          </View>
          <View style={{flex: 0.1}}></View>
          <View style={{flex: 1.1}}>
            <InterestPick_btn {...dta.upgrade} onclick={onc} hm={ckdBtns} />
          </View>
          <View style={{flex: 0.2}}></View>
        </View>
        <View style={styles.btnView}>
          {/* B3층 버튼 배열 */}
          <View style={{flex: 0.2}}></View>
          <View style={{flex: 1.2}}>
            <InterestPick_btn {...dta.lifestyle} onclick={onc} hm={ckdBtns} />
          </View>
          <View style={{flex: 0.1}}></View>
          <View style={{flex: 0.8}}>
            <InterestPick_btn {...dta.extra} onclick={onc} hm={ckdBtns} />
          </View>
          <View style={{flex: 0.2}}></View>
        </View>
      </View>
      <View style={styles.downView}>
        <View style={{flex: 0.2}}></View>
        <View style={{flex: 1}}>
          <Button style={styles.intBtn} isDisabled={!(ckdBtns === 3)}>
            선택 완료!
          </Button>
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnView: {
    flex: 1,

    alignItems: 'center',
    alignContent: 'space-around',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btn_singleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
  },
  inText: {
    fontSize: 14,
  },
  //버튼
  intBtn: {
    backgroundColor: 'white',
    borderRadius: 30,
  },
});
export default InterestPick;
