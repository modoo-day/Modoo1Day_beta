import React, {Component} from 'react';
import {View, Text, Image, button} from 'react-native';
import Google_Button from './Body/Google_Button';
import Kakao_Button from './Body/Kakao_Button';
import Button from 'apsl-react-native-button'
import EmailLogin_Button from './Body/EmailLogin_Button';
import {createStackNavigator} from '@react-navigation/stack';
import EmailLoginPage from './EmailLoginPage';




const LoginPage = ({navigation}) => {
    return(
        <View style={{flex:1}}>  
            <View style={{height:"45%", justifyContent:'center'}}>
                <View style={{ alignItems:'center', marginBottom:20}}>
                    <Image source={require('../../assets/icons/modoo.png')} style={{width:160, height:123}}/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:60, fontFamily:'neodgm', color:'#ffce2c'}}>모두의 하루</Text>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'column', top:30}}>
                <Kakao_Button/>
                <Google_Button/>


                {/* 이메일 로그인 버튼 */}
                <View style={{flex:1}}>
                    <View style={{alignSelf:'center' , marginTop:-100}}>
                        <Button 
                            style={{ height:65, width:350, backgroundColor:'#55acee', borderColor: '#2875af'}}
                            activeOpacity={1}
                            onPress={()=>navigation.push('EmailLoginPage')}
                            >
                            <View style={{ alignItems:'center', flex:1, flexDirection:'row'}} >
                                <View style={{ marginRight:26, marginLeft:26,}}>
                                    <Image source={require('../../assets/icons/LocalLoginLogo.png')} style={{height:45, width:39}} />
                                </View>
                                <View style={{marginRight:30}}>
                                    <Image source={require('../../assets/icons/loginBorder.png')} style={{height:62}}/>
                                </View>
                                    <Text style={{fontFamily:'NanumBarunGothicBold', fontSize:20, color:'white'}}>      이메일로 로그인</Text>
                            </View>
                        </Button>
                        <View style={{marginTop:40,height:40, alignItems:'center'}}>
                                <Text style={{fontFamily:'neodgm', color:'#a7a7a7'}}>로그인을 하시면 이용약관 동의로 간주합니다.</Text>
                        </View>
                    </View>
                </View>
                    
            </View>
        </View>
    )
}

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