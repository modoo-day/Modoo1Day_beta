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
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const {width, height} = Dimensions.get('window');

export default class CoopSelfiePage extends Component {
  /* flat리스트표 */
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    };
  }

  componentDidMount() {
    var data = [
      {
        id: '1',
        name: 'ㅇㅇㅈ씨의 독재정권',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description:'동해물과백두산이마르고닳도로고오고하느님이보우하사길이 보전하세'
     
      },
      {
        id: '2',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description:'test'
      },
      {
        id: '3',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description:'test'
        },
      {
        id: '4',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description:'test'
        },
      {
        id: '5',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description:'test'
        },
      {
        id: '6',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description:'test'
        },
    ];

    this.setState({
      dataBackup: data,
      dataSource: data,
    });
  }

  filterItem = (event) => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == '') {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter((l) => l.name.toLowerCase().match(query));
      this.setState({
        dataSource: data,
      });
    }
  };

  render() {
    return (
      
        <ScrollView
        contentContainerStyle={styles.position}
        >
         
          <View style={styles.category}>
            <Text style={styles.categoryText}>
              협동 ● 성장 피드 게시중
            </Text>
          </View>
          {/* 리스트 */}
          <FlatList
            style={styles.listStyle}
            keyExtractor={(item) => item.id}
            data={this.state.dataSource}
            renderItem={({item, index}) => {
              return (
                <View
                  style={styles.listItemContainer}>
                  <Image
                    source={item.img}
                    style={styles.listItemImage}
                  />
                  <View style={styles.listTextContainer}>
                    <Text style={styles.listItemText1}>{item.name}</Text>
                    <Text style={styles.listItemText2}>{item.description}</Text>
                  </View>
                </View>
              );
            }}
          />
        
            
        </ScrollView>
      
    );
  }
}



const styles = StyleSheet.create({
    position:{
        alignItems:'center',
    },
  
  //콘텐츠 카테고리
  category:{
    marginTop: '8%', 
    marginBottom: '15%', 
    marginLeft: '4%'
  },
  categoryText:{
    fontFamily: 'neodgm', 
    fontSize:20
  },
  

  //플랫리스트 디자인
  listStyle:{
    
  },
  listItemContainer:{
    width:240,
    height:400,
    marginLeft: 4,
   
    marginBottom:'10%'
  },
  listItemImage:{
    height: '60%', 
    width: '80%', 
    marginBottom: '9%',
    alignSelf:'center'
  },
  listTextContainer:{
    width:'80%',
    left:'10%'
  },
  listItemText1:{
    fontWeight:'bold',
    fontSize:18,
    fontFamily:'neodgm',
  },
  listItemText2:{
    fontWeight:'bold',
    fontSize:RFPercentage(2),
    fontFamily:'neodgm',
  },
});
