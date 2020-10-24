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
        name: '벤처관',
        author: 'Suzanne ',
        img: {uri: 'https://picsum.photos/99'},
        description: '제일 많이 가는 곳',
      },
      {
        id: '2',
        name: '창신관',
        author: 'Stephen King',
        img: {uri: 'https://picsum.photos/88'},
        description: '너무 높은 곳',
      },
      {
        id: '3',
        name: '교육관',
        author: 'Sue Monk Kidd',
        img: {uri: 'https://picsum.photos/98'},
        description: 'Named a Most Anticipated Book of 2020 by O,',
      },
      {
        id: '4',
        name: '중앙 도서관',
        author: 'John Sandford',
        img: {uri: 'https://picsum.photos/56'},
        description:
          'Lucas Davenport investigates a vitriolig author John Sandfor',
      },
      {
        id: '5',
        name: 'The Kennedy Curse',
        author: 'James Patterson',
        img: {uri: 'https://picsum.photos/120'},
        description: 'd to take risks and excel, living by theis given,',
      },
      {
        id: '6',
        name: 'Hidden Valley Road',
        author: 'Robert Kolker',
        img: require('../../../assets/img/night.png'),
        description: 'dAmerican Family is a 2020 non-fiction .',
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
      <View>
        <ScrollView>
          {/* 광고 배너 */}
          <View style={{height: 150}}>
            <Swiper style={styles.wrapper} showsButtons={false}>
              <View style={styles.slide1}>
                <View style={{flexDirection: 'row', backgroundColor: 'pink'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      backgroundColor: 'pink',
                    }}>
                    <Image
                      source={require('../../../assets/img/night.png')}
                      style={{width: 420}}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
              </View>
            </Swiper>
          </View>

          {/* 인기콘텐츠 */}
          <View style={{marginTop: 40, marginBottom: 10, marginLeft: 18}}>
            <Text style={{fontFamily: 'neodgm', fontSize: 15}}>
              인기콘텐츠🔥
            </Text>
          </View>
          {/* 리스트 */}
          <FlatList
            horizontal={true}
            style={{flex: 1}}
            keyExtractor={(item) => item.id}
            data={this.state.dataSource}
            renderItem={({item}) => <Content {...item} />}
          />

          {/* 신규 콘텐츠 */}
          <View style={{marginBottom: 100}}>
            <View style={{marginTop: 40, marginBottom: 10, marginLeft: 18}}>
              <Text style={{fontFamily: 'neodgm', fontSize: 15}}>
                신규콘텐츠✨
              </Text>
            </View>

            {/* 리스트 */}
            
              <FlatList
                horizontal={true}
                style={{flex: 1}}
                keyExtractor={(item) => item.id}
                data={this.state.dataSource}
                renderItem={({item}) => <Content {...item} />}
              />
            
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Body;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
