import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TodayMissionPage from './TodayMissionPage'
import SelfMissionPage from './SelfMissionPage';
import RefMissionPage from './RefMissionPage';

function TodayMission() {
    return (
        
        <TodayMissionPage/>
      
    );
}

function SelfMission() {
    return (
      <SelfMissionPage/>
    );
}
  
function RefMission() {
    return (
        <RefMissionPage/>
    );
}
  

const Tab = createMaterialTopTabNavigator();

function GrowHaru() {
    return (
        <Tab.Navigator
            initialRouteName="Grow"
            tabBarOptions={{
            activeTintColor: 'black',
            labelStyle: { fontSize: 14, fontFamily:'neodgm',justifyContent: 'center',
            alignItems: 'center' },
            indicatorStyle:{backgroundColor:'#fdd835'},
            // indicatorContainerStyle:{width:'70%', left:'5%'},
            style: { backgroundColor: 'white'},
            }}
        >
            
            <Tab.Screen
                name="오늘 미션"
                component={TodayMission}
                options={{ tabBarLabel: '오늘 미션' }}
            />
            <Tab.Screen
                name="셀프 추가"
                component={SelfMission}
                options={{ tabBarLabel: '셀프 추가' }}
            />
            <Tab.Screen
                name="다른 사람들은?"
                component={RefMission}
                options={{ tabBarLabel: '다른 사람들은?' }}
            />
        </Tab.Navigator>
    );
}




export default GrowHaru;
