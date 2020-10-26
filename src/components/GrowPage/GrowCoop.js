import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CoopTodayMissionPage from './CoopTodayMission';
import GrowReviewPage from './GrowReviewPage';


function CoopTodayMission() {
    return (
        <CoopTodayMissionPage/>
    );
}

function CoopSelfie() {
    return (
        <View>
            <Text>인증샷</Text>
        </View>
    );
}
  
function CoopReview() {
    return (
        <GrowReviewPage/>
    );
}

function CoopAsk() {
    return (
        <View>
            <Text>문의사항</Text>
        </View>
    );
}
  

const Tab = createMaterialTopTabNavigator();

function GrowCoop() {
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
                component={CoopTodayMission}
                options={{ tabBarLabel: '오늘 미션' }}
            />
            <Tab.Screen
                name="인증샷"
                component={CoopSelfie}
                options={{ tabBarLabel: '인증샷' }}
            />
            <Tab.Screen
                name="리뷰"
                component={CoopReview}
                options={{ tabBarLabel: '리뷰' }}
            />
            <Tab.Screen
                name="문의사항"
                component={CoopAsk}
                options={{ tabBarLabel: '문의사항' }}
            />
        </Tab.Navigator>
    );
}




export default GrowCoop;
