
import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Bottom from './Bottom/Bottom';
import Body from './Body/Body';
import Title from "./Title/Title";
import SignUp from '../SignUp/SignUp';
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

 

const EmailLoginPage=({navigation, route})=> {
    return (
      <View style={{flex:1, justifyContent:'center'}}>
        {/* <Title /> */}
        <Body />
        
        
        {/* 아래 */}
        <View
          style={{
            
            alignItems: 'center',
            // backgroundColor: 'pink',
            justifyContent: 'center',
            height:100
          }}>

            {/* 회원가입 버튼 */}
            <TouchableOpacity
              onPress={()=>navigation.navigate('SignUp')}
            >
              <Text
              style={{fontFamily:'neodgm'}}
              >회원가입</Text>
            </TouchableOpacity>
          
            <View style={{marginTop:20}}>
              <TouchableOpacity
                // onPress={()=>navigation.navigate('SignUp')}
              >
                <Text
                style={{fontFamily:'neodgm'}}
                >아이디/비밀번호 찾기</Text>
              </TouchableOpacity>
            </View>
        </View>




      </View>
    );
}



const Login = createStackNavigator();

export default class EmailLoginRoute extends Component{
    render() {
        return(
            <Login.Navigator>
                <Login.Screen
                name='EmailLoginPage'
                component={EmailLoginPage}
                />
                <Login.Screen
                name='SignUp'
                component={SignUp}
                
                />
            </Login.Navigator>           
        )
    }
}