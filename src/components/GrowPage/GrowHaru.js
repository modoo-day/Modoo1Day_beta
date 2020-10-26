import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HaruTodayMissionPage from './HaruTodayMissionPage'
import HaruSelfMissionPage from './HaruSelfMissionPage';
import HaruRefMissionPage from './HaruRefMissionPage';

function HaruTodayMission() {
    return (
        
        <HaruTodayMissionPage/>
      
    );
}

function HaruSelfMission() {
    return (
      <HaruSelfMissionPage/>
    );
}
  
function HaruRefMission() {
    return (
        <HaruRefMissionPage/>
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
                component={HaruTodayMission}
                options={{ tabBarLabel: '오늘 미션' }}
            />
            <Tab.Screen
                name="셀프 추가"
                component={HaruSelfMission}
                options={{ tabBarLabel: '셀프 추가' }}
            />
            <Tab.Screen
                name="다른 사람들은?"
                component={HaruRefMission}
                options={{ tabBarLabel: '다른 사람들은?' }}
            />
        </Tab.Navigator>
    );
}




export default GrowHaru;
