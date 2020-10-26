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
import ViewMoreText from 'react-native-view-more-text';




const {width, height} = Dimensions.get('window');

export default class FeedPage extends Component {
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
        profileIcon: require('../../assets/icons/devil.png'),
        id: '1',
        name: 'ㅇㅇㅈ씨의 독재정권',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description:'동해물과백두산이마르고닳도로고오고하느님이보우하사길이 보전하세'
     
      },
      {
        profileIcon: require('../../assets/icons/devil.png'),
        id: '2',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description:'test'
      },
      {
        profileIcon: require('../../assets/icons/devil.png'),
        id: '3',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description:'test'
        },
      {
        profileIcon: require('../../assets/icons/devil.png'),
        id: '4',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description:'test'
        },
      {
        profileIcon: require('../../assets/icons/devil.png'),
        id: '5',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description:'test'
        },
      {
        profileIcon: require('../../assets/icons/devil.png'),
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

  renderViewMore(onPress){
    return(
      <Text style={styles.more} onPress={onPress}>더보기 ▼</Text>
    )
  }
  renderViewLess(onPress){
    return(
      <Text style={styles.less} onPress={onPress}>줄이기 ▲</Text>
    )
  }


  render() {
    return (
      
        <ScrollView
        contentContainerStyle={styles.position}
        >
         
          <View style={styles.top}>
            
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
                    <View style={styles.profileContainer}>
                        <Image style={styles.profileIcon} source={item.profileIcon} />
                        <Text style={styles.author}>{item.author}</Text>
                    </View>
                  <Image
                    source={item.img}
                    style={styles.listItemImage}
                  />
                  <View style={styles.listTextContainer}>
                    <Text style={styles.listItemText1}>{item.name}</Text>


                    <ViewMoreText
                      numberOfLines={1}
                      renderViewMore={this.renderViewMore}
                      renderViewLess={this.renderViewLess}
                      textStyle={{textAlign: 'center'}}
                    >
                       <Text style={styles.listItemText2}>{item.description}</Text>
                    </ViewMoreText>


                   
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
       
    },
  
  

  //플랫리스트 디자인
  listStyle:{
    
  },
  listItemContainer:{
    width:'80%',
    alignSelf:'center',
    height:600,
    //backgroundColor:'lightyellow',
    marginBottom:'10%',
    borderWidth:2
  },
  profileContainer:{
    flex:1,
    flexDirection:'row',
    //backgroundColor:'lightblue',
    height:'15%',
    marginBottom:'1%',
    marginTop:'1%',
    alignItems:'center'
  },
  profileIcon:{
    height:30,
    width:30,
    marginLeft:'10%'
  },
  author:{
    fontFamily:'neodgm',
    fontSize:15,
    marginLeft:'5%'
  },
  listItemImage:{
    height: '60%', 
    width: '100%', 
    marginBottom: '9%',
    alignSelf:'center'
  },
  listTextContainer:{
    width:'80%',
    left:'10%',
    height:'25%',
    alignItems:'flex-start' //listItemText2가 왼쪽 정렬이 안 돼서 사용.
  },
  more:{
    fontFamily:'neodgm',
    fontSize:15,
    textAlign:'right'
  },
  less:{
    fontFamily:'neodgm',
    fontSize:15,
    textAlign:'right'
  },
  listItemText1:{
    fontWeight:'bold',
    fontSize:18,
    fontFamily:'neodgm',
  },
  listItemText2:{
    fontWeight:'bold',
    fontSize:15,
    textAlign:'left'
  },
});
