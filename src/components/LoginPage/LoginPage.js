import React, {Component} from 'react';
import {View, Text, Image, button, StyleSheet,TouchableOpacity} from 'react-native';
import Google_Button from './Body/Google_Button';
import Kakao_Button from './Body/Kakao_Button';
import Button from 'apsl-react-native-button'
import EmailLogin_Button from './Body/EmailLogin_Button';
import {createStackNavigator} from '@react-navigation/stack';
import EmailLoginPage from './EmailLoginPage';
import Title from './Title/Title'




const LoginPage = ({navigation}) => {
    return(
        <View style={{flex:1}}>  
            <Title/>
            <View style={{flex:1, flexDirection:'column', top:30}}>
                <Kakao_Button/>
                <Google_Button/>

                
                {/* 이메일 로그인 버튼 */}
                <View>
                    <View style={styles.ButtonContainer}>
                        <TouchableOpacity
                        onPress={()=>navigation.push('EmailLoginPage')}
                        >
                            <Image 
                                source={require('../../assets/icons/emailLogin.png')} 
                                style={styles.Button}
                                resizeMode={'contain'}
                                />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonContainer:{
      marginTop:'2%'
    },
    Button: { 
      alignSelf:'center',
      width: '80%', 
      height: 50
    },
    textStyle:{
      fontFamily:'NanumBarunGothicBold', 
      fontSize:20,
    },
  });




const Login = createStackNavigator();

export default class LoginRoute extends Component{
    render() {
        return(
            <Login.Navigator>
                <Login.Screen
                name='LoginPage'
                component={LoginPage}
                />
                <Login.Screen
                name='EmailLoginPage'
                component={EmailLoginPage}
                />
            </Login.Navigator>           
        )
    }
}