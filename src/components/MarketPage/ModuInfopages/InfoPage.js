import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SelfiePage from './SelfiePage';
import ReviewPageRoute from './ReviewPage';
import { NavigationContainer } from '@react-navigation/native';
import AskPageRoute from './AskPage';



const {width, height} = Dimensions.get('window');

const InfoPage =()=> {
    return (
      
        <ScrollView>
            <View style={styles.topMargin}></View>
            <View style={styles.first}>
              <Image style={styles.listImage} source={require('../../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.listTitleContainer}>
                  <Text style={styles.listTitle}>물 마시기</Text>
                </View>
                <View style={styles.listTagContainer}>
                    <TouchableOpacity style={styles.listTagTouch}>
                        <Text style={styles.listTag}>#물</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listTagTouch}>
                        <Text style={styles.listTag}>#물</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listTagTouch}>
                        <Text style={styles.listTag}>#물</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listBottomTextContainer}>
                  <View style={styles.profileContainer}>
                    <Image style={styles.profileIcon} source={require('../../../assets/icons/profile.png')}/>
                    <Text style={styles.author}>ㅂㅇㅅ</Text>
                  </View>
                  <Text style={styles.participants}>1000000만명 참여</Text>
                </View>
              </View>
            </View>

            <View style={styles.second}>
              <Image style={styles.listImage} source={require('../../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.secondLineContainer}>
                    <Text style={styles.secondCategoryText}>참여 기간</Text>
                    <Text style={styles.deadline}>10.31 ~ 11.06</Text>
                </View>
                <View style={styles.secondLineContainer}>
                    <Text style={styles.secondCategoryText}>인증</Text>
                    <Text style={styles.secondInfoText}>마시는 물이 보이게끔 찍어주세요</Text>
                </View>
                <View style={styles.secondLineContainer}>
                    <Text style={styles.secondCategoryText}>인증 요일</Text>
                    <Text style={styles.secondInfoText}>월, 화, 수, 목, 금, 토</Text>
                </View>
                <View style={styles.secondLineContainer}>
                    <Text style={styles.secondCategoryText}>인증 시간</Text>
                    <Text style={styles.secondInfoText}>00:00 ~ 23.59</Text>
                </View>
              </View>
            </View>

          
          <View style={styles.third}>
              <Image style={styles.listImage} source={require('../../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.thirdLineContainer}>
                        <Text style={styles.thirdLineText1}>70%이상 달성 시</Text>
                        <Text style={styles.thirdLineText1}>100%이상 달성 시</Text>
                    </View>
                    <View style={styles.third23LineContianer}>
                        <View style={styles.thirdLineContainer}>
                            <Text style={styles.thirdLineText2}>2경험치 (1경험치)</Text>
                            <Text style={styles.thirdLineText2}>5경험치 (3경험치)</Text>
                        </View>
                        <View style={styles.thirdLineContainer}>
                            <Text style={styles.thirdLineText2}>2코인 (2코인)</Text>
                            <Text style={styles.thirdLineText2}>5코인 (3코인)</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.fourth}>
              <Image style={styles.listImage} source={require('../../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.fourthLineContainer}>
                        <Text style={styles.fourthTitleText}>유의 사항</Text>
                    </View>
                    <View style={styles.fourthLineContainer}>
                        <Text style={styles.fourthText}>인증 가이드 사진에 맞춰서 찍어야합니다.</Text>
                    </View>
                    <View style={styles.fourthLineContainer}>
                        <Text style={styles.fourthText}>중복된 사진은 경고를 받게 될 수 있습니다.</Text>
                    </View>
                    <View style={styles.fourthLineContainer}>
                        <Text style={styles.fourthText}>리뷰를 남겨주셔야 리워드를 받을 수 있습니다.</Text>
                    </View>
                </View>
            </View>


        </ScrollView>
      
    );
  
}



const Tabs = createMaterialTopTabNavigator();

function ModuInfoRoute() {
  return (

            <Tabs.Navigator
                initialRouteName="ModuInfoRoute"
                tabBarOptions={{
                activeTintColor: 'black',
                labelStyle: { fontSize: 14, fontFamily:'neodgm',justifyContent: 'center',
                alignItems: 'center' },
                indicatorStyle:{backgroundColor:'#fdd835'},
                // indicatorContainerStyle:{width:'70%', left:'5%'},
                style: { backgroundColor: 'white'},
                }}
            >
                
                <Tabs.Screen
                    name="모두 정보"
                    component={InfoPage}
                    options={{ tabBarLabel: '모두 정보' }}
                />
                <Tabs.Screen
                    name="인증"
                    component={SelfiePage}
                    options={{ tabBarLabel: '인증' }}
                />
                <Tabs.Screen
                    name="리뷰"
                    component={ReviewPageRoute}
                    options={{ tabBarLabel: '리뷰' }}
                />
                <Tabs.Screen
                    name="문의사항"
                    component={AskPageRoute}
                    options={{ tabBarLabel: '문의사항' }}
                />
            </Tabs.Navigator>
  );
}

export default ModuInfoRoute;



const styles = StyleSheet.create({
  /* 배너 */
  topMargin:{
    height:'6%'
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
  listTextContainer:{
    flex:1,
    paddingLeft:'5%'
  },
  first:{
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
  listTitleContainer:{
    flex:115,
    
  },
  listTitle:{
    top:'5%',
    fontFamily:'neodgm',
    fontSize:25
  },
  listTagContainer:{
    flex:1,
    flexDirection:'row',
  },
  listTagTouch:{
    //backgroundColor:'pink',
    bottom:'15%',
    marginRight:'12%'
  },
  listTag:{
    fontFamily:'neodgm',
    fontSize:16
  },
  listBottomTextContainer:{
    // backgroundColor:'lightblue',
    flex:1,
    flexDirection:'column'
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
  second:{
    // backgroundColor:'lightgreen',
    flex:1,
    flexDirection:'row',
    marginBottom:'5%',
    marginHorizontal:'5%'
  },
  secondLineContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    //backgroundColor:'pink'
  },
  secondCategoryText:{
    fontFamily:'neodgm',
    fontSize:RFPercentage(1.4)
  },
  deadline:{
    fontFamily:'neodgm',
    fontSize:RFPercentage(3),
  },
  secondInfoText:{
    fontFamily:'neodgm',
    fontSize:RFPercentage(1.6)
  },
  third:{
    // backgroundColor:'lightgreen',
    flex:1,
    flexDirection:'row',
    marginBottom:'5%',
    marginHorizontal:'5%'
  },
  thirdLineContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  third23LineContianer:{
    //backgroundColor:'pink'
  },
  thirdLineText1:{
    fontFamily:'neodgm',
    fontSize:RFPercentage(1.75)
  },
  thirdLineText2:{
    fontFamily:'neodgm',
    fontSize:RFPercentage(1.4),
    marginTop:'2%'
  },
  fourth:{
    // backgroundColor:'lightgreen',
    flex:1,
    flexDirection:'row',
    marginBottom:'5%',
    marginHorizontal:'5%'
  },
  fourthLineContainer:{
    flex:0.8
  },
  fourthTitleText:{
    fontSize:RFPercentage(1.7),
    fontFamily:'neodgm',

  },
  fourthText:{
    fontSize:RFPercentage(1.39),
    fontFamily:'neodgm',
  },
  
});
