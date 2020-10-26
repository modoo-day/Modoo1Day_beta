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
import Button from 'apsl-react-native-button';


const {width, height} = Dimensions.get('window');

class GrowReviewPage extends Component {
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
        time: 'test',
        img: require('../../assets/img/night.png'),
        author:'test'
     
      },
      {
        id: '2',
        name: 'test',
        time: 'test',
        img: require('../../assets/img/night.png'),
        author:'test'
      },
      {
        id: '3',
        name: 'test',
        time: 'test',
        img: require('../../assets/img/night.png'),
        author:'test'
        },
      {
        id: '4',
        name: 'test',
        time: 'test',
        img: require('../../assets/img/night.png'),
        author:'test'
        },
      {
        id: '5',
        name: 'test',
        time: 'test',
        img: require('../../assets/img/night.png'),
        author:'test'
        },
      {
        id: '6',
        name: 'test',
        time: 'test',
        img: require('../../assets/img/night.png'),
        author:'test'
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
         
          {/* 인기콘텐츠 */}
          <View style={styles.buttonContainer}>
            <Button 
                style={styles.button} 
                textStyle={styles.buttonText}
                activeOpacity={0.5}
                disabledStyle={{backgroundColor:'white'}}
                isDisabled={false}
                isLoading={false}
                //onPress={this.onLogin}
                
            >
            리뷰 쓰기!
            </Button>
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
                  <View>
                    <Text style={styles.listItemName}>{item.name}</Text>
                    <View style={styles.timetimeContainer}>
                        <Text style={styles.listItemText1}>{item.time}</Text>
                        <Text style={styles.listItemText2}>{item.author}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        
            
        </ScrollView>
      
    );
  }
}

export default GrowReviewPage;

const styles = StyleSheet.create({
    position:{
        alignItems:'center',
    },
  
  buttonContainer:{
    marginTop: '8%', 
    
  },
  button: {
    width: '70%',
    // backgroundColor: '#ffcd2c',
    borderWidth: 2,
    // height: '35%',
    borderRadius:2
  },
  buttonText: {
    fontFamily: 'neodgm',
    fontSize: RFPercentage(3),
    textAlign:'center'
  },
  //플랫리스트 디자인
  listStyle:{
    width:'90%',
    borderWidth:2,
    // backgroundColor:'pink'
  },
  listItemContainer:{
    // backgroundColor:'lightyellow',
    padding: '6%',
    borderWidth:0.35
    // alignItems: 'center',
    // marginBottom:'1%'
  },
  timetimeContainer:{
    flexDirection:'row',
  },
  listItemName:{
    fontWeight:'bold',
    fontSize:20,
  },
  listItemText1:{
    fontWeight:'bold',
    fontSize:18,
  },
  listItemText2:{
    fontWeight:'bold',
    fontSize:18,
    marginLeft:'5%'
  },
  
  
});
