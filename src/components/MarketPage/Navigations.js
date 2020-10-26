import * as React from 'react';
import {Button, Text, Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchPage from '../SearchPage/SearchPage';
import AccountPage from '../AccountPage/AccountPage';
import FeedPage from '../FeedPage/FeedPage';
import HistoryPage from '../HistoryPage/HistoryPage';
import Body from '../LoginPage/Body/Body';
import MarketPage from './MarketPage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GrowHomePage from '../GrowPage/GrowHomePage';
import LocalLoginPage from '../LoginPage/EmailLoginPage';
import LoginPage from '../LoginPage/LoginPage';
import GrowHaru from '../GrowPage/GrowHaru';
import GrowCoop from '../GrowPage/GrowCoop';
import GrowRoute from '../GrowPage/GrowHomePage';


function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('../../assets/icons/modoo.png')}
    />
  );
}


// 위 내비게이션

function Search({navigation}) {
  return (
    <SearchPage/>
  );
}

function Account({navigation}) {
  return (
    <AccountPage {...navigation}/>
  );
}

function LocalLogin({Navigation}) {
  return(
    <LocalLoginPage/>
  )
}

function Login({Navigation}) {
  return(
    <LoginPage/>
  )
}

// 아래 내비게이션 

function Market() {
  return(
    <MarketPage/>
  )
}

function Feed({}) {
  return (
    <FeedPage/>
  );
}

function History({}) {
  return (
    <HistoryPage/>
  );
}

function Grow() {
  return(
    <GrowRoute/>
  )
}



function TopNavigation({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'green',
            
          }}>
          
          <View style={{marginHorizontal: 10, flex:1, flexDirection:'row'}}>
            <View style={{marginRight:15, top:2}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Search')}
              >
                <Image source={require('../../assets/icons/search.png')}
                  style={{width:27, height:27}}
                />
              </TouchableOpacity>
            </View>
            
            <View style={{marginHorizontal:10}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Account')}
              >
                <Image source={require('../../assets/icons/profile.png')}
                  style={{width:30, height:30}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ),
    });
  });

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffcd2c',
        inactiveTintColor: 'gray',
        labelPosition: 'below-icon',
        labelStyle:{
          fontFamily:'neodgm',
          fontSize:20
        },
        style: {
          paddingBottom:'4%',
          paddingHorizontal:'14%'
          }
        }}
    >
      <Tab.Screen name='시장' component={Market} />
      <Tab.Screen name="성장" component={Grow} />
      <Tab.Screen name="피드" component={Feed} />
      <Tab.Screen name="기록" component={History} />
    </Tab.Navigator>

    

  );
}

const Stack = createStackNavigator();
const modal = createStackNavigator();
const Tab = createBottomTabNavigator();

function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TopNavigation}
          options={({navigation, route}) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
          })}
        />
        <modal.Screen name="Search" component={Search} mode={modal} />
        <modal.Screen name="Account" component={Account} mode={modal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;
