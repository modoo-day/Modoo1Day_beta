import React from 'react';
import {View, Text, Image, button} from 'react-native';
import Google_Button from './Body/Google_Button';
import Kakao_Button from './Body/Kakao_Button';
import Button from 'apsl-react-native-button'
import EmailLogin_Button from './Body/EmailLogin_Button';



const LoginPage = () => {
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
                <EmailLogin_Button/>
                    
            </View>
        </View>
    )
}
export default LoginPage;