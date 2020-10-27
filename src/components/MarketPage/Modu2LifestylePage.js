import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const {width, height} = Dimensions.get('window');

const Modu2LifestylePage =()=> {
    return (
        <ScrollView>
            <View style={styles.TopMargin}></View>
            <View style={styles.listContainer}>
              <Image style={styles.listImage} source={require('../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.listTitleContainer}>
                  <Text style={styles.listTitle}>물 마시기</Text>
                </View>
                <View style={styles.listBottomTextContainer}>
                  <View style={styles.profileContainer}>
                    <Image style={styles.profileIcon} source={require('../../assets/icons/profile.png')}/>
                    <Text style={styles.author}>ㅂㅇㅅ</Text>
                  </View>
                  <Text style={styles.participants}>1000000만명 참여</Text>
                </View>
              </View>
            </View>

            <View style={styles.listContainer}>
              <Image style={styles.listImage} source={require('../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.listTitleContainer}>
                  <Text style={styles.listTitle}>물 마시기</Text>
                </View>
                <View style={styles.listBottomTextContainer}>
                  <View style={styles.profileContainer}>
                    <Image style={styles.profileIcon} source={require('../../assets/icons/profile.png')}/>
                    <Text style={styles.author}>ㅂㅇㅅ</Text>
                  </View>
                  <Text style={styles.participants}>1000000만명 참여</Text>
                </View>
              </View>
            </View>

            <View style={styles.listContainer}>
              <Image style={styles.listImage} source={require('../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.listTitleContainer}>
                  <Text style={styles.listTitle}>물 마시기</Text>
                </View>
                <View style={styles.listBottomTextContainer}>
                  <View style={styles.profileContainer}>
                    <Image style={styles.profileIcon} source={require('../../assets/icons/profile.png')}/>
                    <Text style={styles.author}>ㅂㅇㅅ</Text>
                  </View>
                  <Text style={styles.participants}>1000000만명 참여</Text>
                </View>
              </View>
            </View>

            <View style={styles.listContainer}>
              <Image style={styles.listImage} source={require('../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.listTitleContainer}>
                  <Text style={styles.listTitle}>물 마시기</Text>
                </View>
                <View style={styles.listBottomTextContainer}>
                  <View style={styles.profileContainer}>
                    <Image style={styles.profileIcon} source={require('../../assets/icons/profile.png')}/>
                    <Text style={styles.author}>ㅂㅇㅅ</Text>
                  </View>
                  <Text style={styles.participants}>1000000만명 참여</Text>
                </View>
              </View>
            </View>

            <View style={styles.listContainer}>
              <Image style={styles.listImage} source={require('../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.listTitleContainer}>
                  <Text style={styles.listTitle}>물 마시기</Text>
                </View>
                <View style={styles.listBottomTextContainer}>
                  <View style={styles.profileContainer}>
                    <Image style={styles.profileIcon} source={require('../../assets/icons/profile.png')}/>
                    <Text style={styles.author}>ㅂㅇㅅ</Text>
                  </View>
                  <Text style={styles.participants}>1000000만명 참여</Text>
                </View>
              </View>
            </View>

            <View style={styles.listContainer}>
              <Image style={styles.listImage} source={require('../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.listTitleContainer}>
                  <Text style={styles.listTitle}>물 마시기</Text>
                </View>
                <View style={styles.listBottomTextContainer}>
                  <View style={styles.profileContainer}>
                    <Image style={styles.profileIcon} source={require('../../assets/icons/profile.png')}/>
                    <Text style={styles.author}>ㅂㅇㅅ</Text>
                  </View>
                  <Text style={styles.participants}>1000000만명 참여</Text>
                </View>
              </View>
            </View>

            <View style={styles.listContainer}>
              <Image style={styles.listImage} source={require('../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.listTitleContainer}>
                  <Text style={styles.listTitle}>물 마시기</Text>
                </View>
                <View style={styles.listBottomTextContainer}>
                  <View style={styles.profileContainer}>
                    <Image style={styles.profileIcon} source={require('../../assets/icons/profile.png')}/>
                    <Text style={styles.author}>ㅂㅇㅅ</Text>
                  </View>
                  <Text style={styles.participants}>1000000만명 참여</Text>
                </View>
              </View>
            </View>
        </ScrollView>
    );
}


export default Modu2LifestylePage;


const styles = StyleSheet.create({
  /* 배너 */
  TopMargin:{
    height:15 // 퍼센트를 주면 보여지는 게시물 개수에 따라 여백이 달라져서 픽셀값으로 줬어요.
  },
  wrapper: {
    height:'100%',
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  b_imageContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'pink',
  },
  b_image:{
    width:width,
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  //콘텐츠 카테고리
  category:{
    marginTop: '8%', 
    marginBottom: '4%', 
    marginLeft: '4%'
  },
  categoryText:{
    fontFamily: 'neodgm', 
    fontSize:RFPercentage(2)
  },
  newCon_container:{
  },
  //스크롤 리스트
  listContainer:{
    // backgroundColor:'lightgreen',
    flex:1,
    flexDirection:'row',
    marginBottom:'5%',
    marginHorizontal:'5%'
  },
  listImage:{
    width:120,
    height:120
  },
  listTextContainer:{
    flex:1,
    paddingLeft:'5%'
  },
  listTitleContainer:{
    flex:115,
    justifyContent:'center'
  },
  listTitle:{
    top:'5%',
    fontFamily:'neodgm',
    fontSize:18
  },
  listBottomTextContainer:{
    // backgroundColor:'lightblue',
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  profileContainer:{
    flex:1,
    flexDirection:'row'
  },
  profileIcon:{
    width:20,
    height:20,
    marginRight:'5%'
  },
  author:{
    fontFamily:'neodgm',
    fontSize:RFPercentage(1.7),
  },
  participants:{
    fontSize:RFPercentage(1.7),
    fontFamily:'neodgm',
  },
});
