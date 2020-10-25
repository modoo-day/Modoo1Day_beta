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
import Content from './Content';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const {width, height} = Dimensions.get('window');

class Body extends Component {
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
        name: 'test',
        author: 'test',
        img: require('../../../assets/img/night.png'),
        description:'test'
     
      },
      {
        id: '2',
        name: 'test',
        author: 'test',
        img: require('../../../assets/img/night.png'),
        description:'test'
      },
      {
        id: '3',
        name: 'test',
        author: 'test',
        img: require('../../../assets/img/night.png'),
        description:'test'
        },
      {
        id: '4',
        name: 'test',
        author: 'test',
        img: require('../../../assets/img/night.png'),
        description:'test'
        },
      {
        id: '5',
        name: 'test',
        author: 'test',
        img: require('../../../assets/img/night.png'),
        description:'test'
        },
      {
        id: '6',
        name: 'test',
        author: 'test',
        img: require('../../../assets/img/night.png'),
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
                  source={require('../../../assets/img/night.png')}
                  style={styles.b_image}
                />
              </View>
              
            </View>

            <View style={styles.slide2}>
              <View style={styles.b_imageContainer}>
                <Image
                  source={require('../../../assets/img/night.png')}
                  style={styles.b_image}
                />
              </View>
            </View>

            <View style={styles.slide3}>
              <View style={styles.b_imageContainer}>
                <Image
                  source={require('../../../assets/img/night.png')}
                  style={styles.b_image}
                />
              </View>
            </View>

          </Swiper>
          {/* 인기콘텐츠 */}
          <View style={styles.category}>
            <Text style={styles.categoryText}>
              인기콘텐츠🔥
            </Text>
          </View>
          {/* 리스트 */}
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
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
                  <View>
                    <Text style={styles.listItemText1}>{item.name}</Text>
                    <Text style={styles.listItemText2} numberOfLines={4}>{item.description}</Text>
                    <Text style={styles.listItemText3}>{item.author}</Text>
                  </View>
                </View>
              );
            }}
          />
          {/* 신규 콘텐츠 */}
          <View style={styles.category}>
            <Text style={styles.categoryText}>
              신규콘텐츠✨
            </Text>
          </View>
          {/* 리스트 */}
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
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
                  <View>
                    <Text style={styles.listItemText1}>{item.name}</Text>
                    <Text style={styles.listItemText2} numberOfLines={4}>{item.description}</Text>
                    <Text style={styles.listItemText3}>{item.author}</Text>
                  </View>
                </View>
              );
            }}
          />
            
        </ScrollView>
      
    );
  }
}

export default Body;

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

  //플랫리스트 디자인
  listStyle:{
    
  },
  listItemContainer:{
    width: 105,
    marginLeft: 4,
    alignItems: 'center',
    marginBottom:'10%'
  },
  listItemImage:{
    height: 80, 
    width: 80, 
    marginBottom: '9%'
  },
  listItemText1:{
    fontWeight:'bold',
    fontSize:RFPercentage(2.6)
  },
  listItemText2:{
    fontWeight:'bold',
    fontSize:RFPercentage(2),
    textAlign:'center'
  },
  listItemText3:{
    fontWeight:'bold',
    fontSize:RFPercentage(2),
    textAlign:'center',
  },
});
