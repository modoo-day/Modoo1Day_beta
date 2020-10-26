import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import GrowHaru from './GrowHaru';
import GrowCoop from './GrowCoop';
import Flat_Child from './Childs/Flat_Child';

const {width, height} = Dimensions.get('window');

class GrowHomePage extends Component {
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
        id: '0',
      },
      {
        id: '1',
        name: 'ㅇㅇㅈ씨의 독재정권',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description: 'test',
      },
      {
        id: '2',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description: 'test',
      },
      {
        id: '3',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description: 'test',
      },
      {
        id: '4',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description: 'test',
      },
      {
        id: '5',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description: 'test',
      },
      {
        id: '6',
        name: 'test',
        author: 'test',
        img: require('../../assets/img/night.png'),
        description: 'test',
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
    var isFirst = true;
    return (
      <View style={{alignItems: 'center'}}>
        <FlatList
          style={styles.listStyle}
          keyExtractor={(item) => item.id}
          data={this.state.dataSource}
          renderItem={({item, index}) => (
            <Flat_Child {...{item}} {...{index}} />
          )}
        />
      </View>
    );
  }
}

//export default GrowHomePage;

const Tabs = createMaterialTopTabNavigator();

function GrowRoute() {
  return (
    <Tabs.Navigator
      initialRouteName="GrowRoute"
      tabBarOptions={{
        activeTintColor: 'black',
        labelStyle: {
          fontSize: 14,
          fontFamily: 'neodgm',
          justifyContent: 'center',
          alignItems: 'center',
        },
        indicatorStyle: {backgroundColor: '#fdd835'},
        // indicatorContainerStyle:{width:'70%', left:'5%'},
        style: {backgroundColor: 'white'},
      }}>
      <Tabs.Screen
        name="홈"
        component={GrowHomePage}
        options={{tabBarLabel: '홈'}}
      />
      <Tabs.Screen
        name="하루"
        component={GrowHaru}
        options={{tabBarLabel: '하루'}}
      />
      <Tabs.Screen
        name="협동"
        component={GrowCoop}
        options={{tabBarLabel: '협동'}}
      />
    </Tabs.Navigator>
  );
}

export default GrowRoute;

const styles = StyleSheet.create({
  position: {
    alignItems: 'center',
  },

  //콘텐츠 카테고리
  category: {
    marginTop: '8%',
    marginBottom: '15%',
    marginLeft: '4%',
  },
  categoryText: {
    fontFamily: 'neodgm',
    fontSize: 20,
  },

  //플랫리스트 디자인
  listStyle: {},
  listItemContainer: {
    width: 240,
    height: 240,
    marginLeft: 4,
    alignItems: 'center',
    marginBottom: '10%',
  },
  listItemImage: {
    height: '75%',
    width: '75%',
    marginBottom: '9%',
  },
  listItemText1: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'neodgm',
  },
  listItemText2: {
    fontWeight: 'bold',
    fontSize: RFPercentage(2),
    textAlign: 'center',
    fontFamily: 'neodgm',
  },
  listItemText3: {
    fontWeight: 'bold',
    fontSize: RFPercentage(2),
    textAlign: 'center',
    fontFamily: 'neodgm',
  },
});
