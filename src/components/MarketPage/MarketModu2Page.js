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
import Swiper from 'react-native-swiper';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Modu2FamilyPage from './Modu2FamilyPage';
import Modu2BeautyPage from './Modu2BeautyPage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Modu2HealthPage from './Modu2HealthPage';



const {width, height} = Dimensions.get('window');

const MarketModu2Page =()=> {
    return (
      
        <ScrollView>
          {/* 광고 배너 */}
          <Swiper 
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

          </Swiper>
          <ScrollView>
            
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



const Tabs = createMaterialTopTabNavigator();

function MarketModu2Route() {
  return (
      <Tabs.Navigator
          initialRouteName="MarketModu2Route"
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
              name="전체"
              component={MarketModu2Page}
              options={{ tabBarLabel: '전체' }}
          />
          <Tabs.Screen
              name="가족"
              component={Modu2FamilyPage}
              options={{ tabBarLabel: '가족' }}
          />
          <Tabs.Screen
              name="뷰티"
              component={Modu2BeautyPage}
              options={{ tabBarLabel: '뷰티' }}
          />
          <Tabs.Screen
              name="건강/운동"
              component={Modu2HealthPage}
              options={{ tabBarLabel: '건강/운동' }}
          />
      </Tabs.Navigator>
  );
}

export default MarketModu2Route;



const styles = StyleSheet.create({
  /* 배너 */
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
