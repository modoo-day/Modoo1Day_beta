import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import QuickViewChild from './Childs/QuickViewChild';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const {width, height} = Dimensions.get('window');

const MarketModu1Page = () => {
  // Firebase 관련 정의 시작
  // 처음만 함수 불러옴
  const [isFirst, setIsFirst] = useState(true);

  // Collection Reference
  const BRD_DUMMY = firestore().collection('BRD_DUMMY');
  const USR_TB = firestore().collection('USR_TB');
  const USR_UID_C = firestore().collection('USR_UID_C');

  // Data from firestore
  // 평면화를 통한 속도 증가를 위한 노가다 선언
  // 메인에 표시되는 4가지 항목은 가장 트래픽이 많이 필요한거니까 미리 API서버에 인덱싱해둘까.
  const [hotDataFirst, setHotDataFirst] = useState();
  const [hotDataSecond, setHotDataSecond] = useState();
  const [newDataFirst, setNewDataFirst] = useState();
  const [newDataSecond, setNewDataSecond] = useState();
  const [recDataFirst, setRecDataFirst] = useState();
  const [recDataSecond, setRecDataSecond] = useState();

  const [modalVisible, setModalVisible] = useState(false);

  // 인기 모두
  const getHots = () => {
    // 유료라서 조심해야되니까 별표 로그
    console.log('********** Firestore GET **********');

    // isLoading == true
    // Firestore에서 각각의 Hot 게시물 데이터 받아오기 시작.
    // 언제 새로고침이 필요할지 모르니 확장 가능성을 위해 익명함수화.

    // 참여한 인원 내림차순 정렬
    // 상위 2개만 뽑아서 가져옴.
    BRD_DUMMY.orderBy('participate_count_num', 'desc')
      .limit(2)
      .get()
      .then((snsht) => {
        console.log('가져옴');
        // limit이 2개로 정해져있으니까 평면화로 빠르게.
        setHotDataFirst(snsht._docs[0]._data);
        setHotDataSecond(snsht._docs[1]._data);
      })
      // 에러 핸들링
      .catch((err) => {
        console.log(err);
      });
  };

  // 최신 모두
  const getNews = () => {
    // 유료라서 조심해야되니까 별표 로그
    console.log('********** Firestore GET **********');

    // isLoading == true
    // Firestore에서 각각의 New 게시물 데이터 받아오기 시작.
    // 언제 새로고침이 필요할지 모르니 확장 가능성을 위해 익명함수화.

    // 참여한 인원 내림차순 정렬
    // 상위 2개만 뽑아서 가져옴.
    BRD_DUMMY.orderBy('upload_time', 'desc')
      .limit(2)
      .get()
      .then((snsht) => {
        console.log('가져옴');
        // limit이 2개로 정해져있으니까 평면화로 빠르게.
        setNewDataFirst(snsht._docs[0]._data);
        setNewDataSecond(snsht._docs[1]._data);
      })
      // 에러 핸들링
      .catch((err) => {
        console.log(err);
      });
  };

  // 추천 모두
  const getRecs = () => {
    // 유료라서 조심해야되니까 별표 로그
    console.log('********** Firestore GET **********');
    // 추천 방식: 게시물마다 태그 몇 개씩 지정.
    // Firestore 쿼리문에서, Array를 돌아다니면서 태그 해당하는거 가져오기.
    var user = auth().currentUser;
    if (user) {
      // 로그인이 되어있으면 유저 Interest 기반으로 추천.
      // TODO: 추천 기반의 데이터들을 클라이언트 사이드에서 처리하는게 좋지 않은 것 같다.
      // API 서버에 요청하면 추천 게시물 REF들을 반환하는걸로? 근데 이것도 속도는 딱히..
      // 먼저 유저 Interest Array를 받아오자.
      var interestsArr;
      USR_UID_C.where('uid', '==', user.uid)
        .get()
        .then((snapshot) => {
          console.log('현재 사용자 uid:', user.uid);
          // snapshot에서 바로 data를 가져오는 방법.
          var USR_DATA = snapshot._docs[0]._data.usrRef;
          USR_DATA.get()
            .then((snst) => {
              console.log(snst._data.interestsArr);
              interestsArr = snst._data.interestsArr;
              BRD_DUMMY.where(
                'interestsArr',
                'array-contains-any',
                interestsArr,
              )
                .limit(2)
                .get()
                .then((snst) => {
                  setRecDataFirst(snst._docs[0]._data);
                  setRecDataSecond(snst._docs[1]._data);
                });
            })
            .catch(console.err);
        });
    } else {
    }
  };

  // 첫 실행시 getHot, getNews, getRecs 실행.
  if (isFirst == true) {
    setIsFirst(false);
    getHots();
    getNews();
    getRecs();
  }

  return (
    // 전체 묶는 ScrollView 시작.
    <ScrollView>
      {/* 광고 배너 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.backIconContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={styles.backIconTouch}>
              <Image
                style={styles.backIcon}
                source={require('../../assets/icons/refresh.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bigBannerContainer}>
            <Image
              style={styles.bigBannerImage}
              source={require('../../assets/img/night.png')}
            />
            <Text style={styles.bannerText}>내가 광고주다 ㅋㅋㄹㅃㅃ</Text>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Image
          style={styles.bannerImage}
          source={require('../../assets/img/night.png')}
        />
      </TouchableOpacity>

      {/* <Swiper 
          style={styles.wrapper} 
          showsButtons={false}
          height={160}
        
          >
            
            <View style={styles.slide1}>
              <View style={styles.b_imageContainer}>
                <Image
                  source={require('../../assets/img/night.png')}
                  style={styles.b_image}
                />
              </View>
              
            </View>

            <View style={styles.slide2}>
              <View style={styles.b_imageContainer}>
                <Image
                  source={require('../../assets/img/night.png')}
                  style={styles.b_image}
                />
              </View>
            </View>

            <View style={styles.slide3}>
              <View style={styles.b_imageContainer}>
                <Image
                  source={require('../../assets/img/night.png')}
                  style={styles.b_image}
                />
              </View>
            </View>

          </Swiper> */}

      {/* 인기콘텐츠 */}
      <View style={styles.category}>
        <Text style={styles.categoryText}>인기 모두 🔥</Text>
      </View>
      <QuickViewChild {...hotDataFirst} />
      <QuickViewChild {...hotDataSecond} />

      {/* 신규 콘텐츠 */}
      <View style={styles.category}>
        <Text style={styles.categoryText}>신규 모두 ✨</Text>
      </View>
      <QuickViewChild {...newDataFirst} />
      <QuickViewChild {...newDataSecond} />

      {/* 추천 콘텐츠 */}
      <View style={styles.category}>
        <Text style={styles.categoryText}>추천 모두 🍳</Text>
      </View>
      <QuickViewChild {...recDataFirst} />
      <QuickViewChild {...recDataSecond} />
    </ScrollView>
  );
};

export default MarketModu1Page;

const styles = StyleSheet.create({
  // 모달창
  bannerContainer: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: "center",
    //backgroundColor:'pink',
    width: '100%',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '100%',
    flex: 0.937,
  },
  backIconContainer: {
    height: '10%',
    justifyContent: 'center',
    marginLeft: '4%',
  },
  backIconTouch: {
    // backgroundColor:'pink',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 33,
    height: 33,
  },
  bigBannerContainer: {
    height: '87.5%',
  },
  bigBannerImage: {
    //배너 누르면 나오는 큰 이미지를 말합니다.
    flex: 0.65,
    width: '100%',
  },
  bannerText: {
    marginTop: '5%',
  },
  bannerImage: {
    width: '100%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  /* 배너 */
  // wrapper: {
  //   height:'100%',
  // },
  // slide1: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'white',
  // },
  // b_imageContainer:{
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   backgroundColor: 'pink',
  // },
  // b_image:{
  //   width:width,
  // },
  // slide2: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#97CAE5',
  // },
  // slide3: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#92BBD9',
  // },
  //콘텐츠 카테고리
  category: {
    marginTop: '8%',
    marginBottom: '4%',
    marginLeft: '4%',
  },
  categoryText: {
    fontFamily: 'neodgm',
    fontSize: RFPercentage(2),
  },
  newCon_container: {},
  //스크롤 리스트
  listContainer: {
    // backgroundColor:'lightgreen',
    flex: 1,
    flexDirection: 'row',
    marginBottom: '5%',
    marginHorizontal: '5%',
  },
  listImage: {
    width: 120,
    height: 120,
  },
  listTextContainer: {
    flex: 1,
    paddingLeft: '5%',
  },
  listTitleContainer: {
    flex: 115,
    justifyContent: 'center',
  },
  listTitle: {
    top: '5%',
    fontFamily: 'neodgm',
    fontSize: 18,
  },
  listBottomTextContainer: {
    // backgroundColor:'lightblue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  profileIcon: {
    width: 20,
    height: 20,
    marginRight: '5%',
  },
  author: {
    fontFamily: 'neodgm',
    fontSize: RFPercentage(1.7),
  },
  participants: {
    fontSize: RFPercentage(1.7),
    fontFamily: 'neodgm',
  },
});
