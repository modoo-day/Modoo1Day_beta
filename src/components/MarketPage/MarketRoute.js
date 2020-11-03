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
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MarketModu1Page from './MarketModu1Page';
import MarketModu2Route from './MarketModu2Page';
import ModuInfoRoute from './ModuInfopages/InfoPage';


const Tabs = createMaterialTopTabNavigator();

function MarketRoute() {
  return (
      <Tabs.Navigator
          initialRouteName="MarketRoute"
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
              name='모두 현황'
              component={MarketModu1Page}
              options={{ tabBarLabel: '모두 현황' }}
          />
          <Tabs.Screen
              name="모두 찾기"
              component={MarketModu2Route}
              options={{ tabBarLabel: '모두 찾기' }}
          />
          <Tabs.Screen
            name='ModuInfoRoute'
            component={ModuInfoRoute}
          />

      </Tabs.Navigator>
  );
}




export default MarketRoute;

