
import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import Bottom from './Bottom/Bottom';
import Body from './Body/Body';
import Title from "./Title/Title";
import SignUp from '../SignUp/SignUp';
import {createStackNavigator} from '@react-navigation/stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Navigations from '../MarketPage/Navigations';
import MarketPage from '../MarketPage/MarketPage';

 

const EmailLoginPage=({navigation, route})=> {
    return (
        <View style={styles.flex1}>
          {/* <Title /> */}
          <View style={styles.container}>
                        
            <Body />
            <View style={styles.bottomButtonsContainer}>
              <TouchableOpacity
                onPress={()=>navigation.navigate('SignUp')}
              >
                <Text style={styles.text}>회원가입</Text>
              </TouchableOpacity>
            
              <View style={styles.idpwContainer}>
                <TouchableOpacity
                  // onPress={()=>navigation.navigate('SignUp')}
                >
                  <Text style={styles.text}>아이디/비밀번호 찾기</Text>
                </TouchableOpacity>
              </View>
            </View>
          
          </View>



        </View>
    );
}


const styles = StyleSheet.create({
  flex1:{
    flex:1,
  },
  container:{
    flex:1,
    justifyContent:'center'
  },
  bottomButtonsContainer:{
    alignItems: 'center',
    marginTop:'-13%'
    
  },
  text:{
    fontFamily:'neodgm',
    fontSize:RFPercentage(1.8)
  },
  idpwContainer:{
    marginTop:'3%',
  },
});





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
                options={{ headerShown: false }}
                />
                <Login.Screen
                name='Home'
                component={MarketPage}
                options={{ headerShown: false }}
                />
            </Login.Navigator>           
        )
    }
}

