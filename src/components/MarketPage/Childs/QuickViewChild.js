import React, {Component, useState} from 'react';
import {View, Image, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import firestore from '@react-native-firebase/firestore';

const QuickViewChild = (info) => {
  const [usrData, setUsrData] = useState([]);

  // 이미지 불러오고 나서 사용할 주소
  const [imgUrl, setImgUrl] = useState('dummy');
  const [pfImgUrl, setPfImgUrl] = useState('dummy');

  // 로딩중이면 (title의 존재 유무로 확인함.)
  if (info.title_str == undefined) {
    return (
      <View style={styles.listContainer}>
        <Image
          style={styles.listImage}
          source={require('../../../assets/img/night.png')}
        />
        <View style={styles.listTextContainer}>
          <View style={styles.listTitleContainer}>
            <Text style={styles.listTitle}>로딩중</Text>
          </View>
          <View style={styles.listBottomTextContainer}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.profileIcon}
                source={require('../../../assets/icons/profile.png')}
              />
              <Text style={styles.author}>로딩중</Text>
            </View>
            <Text style={styles.participants}>로딩중</Text>
          </View>
        </View>
      </View>
    );
  }

  // 정보를 받아옴.
  else {
    // Firestore에서 글 이미지 URL 불러오기.

    // 유저 정보 불러오기 시작.
    var USR_DOC = info.usr_ref;
    USR_DOC.get()
      .then((snsht) => {
        setUsrData(snsht._data);
      })
      .catch((err) => {
        console.log(err);
      });
    return (
      <View style={styles.listContainer}>
        <Image
          style={styles.listImage}
          source={require('../../../assets/img/night.png')}
        />
        <View style={styles.listTextContainer}>
          <View style={styles.listTitleContainer}>
            <Text style={styles.listTitle}>{info.title_str}</Text>
          </View>
          <TouchableOpacity style={styles.listTagContainer}>
            <Text style={styles.listTag}>#물</Text>
          </TouchableOpacity>
          <View style={styles.listBottomTextContainer}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.profileIcon}
                source={require('../../../assets/icons/profile.png')}
              />
              <Text style={styles.author}>{usrData.name}</Text>
            </View>
            <Text style={styles.participants}>
              {info.participate_count_num}명 참여
            </Text>
          </View>
        </View>
      </View>
    );
  }
};

export default QuickViewChild;

const styles = StyleSheet.create({
  // 모달창
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
  listTagContainer:{
    //backgroundColor:'pink',
    bottom:'10%',
    marginRight:'80%'
  },
  listTag:{
    fontFamily:'neodgm',
    fontSize:16
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
