import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Google_Button from './Body/Google_Button';
import Kakao_Button from './Body/Kakao_Button';
import Button from 'apsl-react-native-button';
import EmailLogin_Button from './Body/EmailLogin_Button';
import {createStackNavigator} from '@react-navigation/stack';
import EmailLoginPage from './EmailLoginPage';
import Title from './Title/Title';
import { RFPercentage } from 'react-native-responsive-fontsize';

const LoginPage = ({navigation}) => {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Title/>
      </View>
      <View style={styles.middle}>
        <View style={styles.buttonContainer}>
          <Kakao_Button/>
        </View>
        <View style={styles.buttonContainer}>
          <Google_Button/>
        </View>
      {/* 이메일 로그인 버튼 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.push('EmailLoginPage')}>
            <Image
              source={require('../../assets/icons/emailLogin.png')}
              style={styles.button}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.footer}>
        <Text style={styles.footText}>로그인을 하시면 이용약관 동의로 간주합니다.</Text>
      </View>
    </View>



  )



};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    flex:2,
    
  },
  middle:{
    flex:2.4,
    alignItems:'center',
    justifyContent:'center'
  },
  footer:{
    flex:1,
  },
  footText:{
    fontFamily:'neodgm',
    fontSize:RFPercentage(1.2),
    textAlign:'center'
  }, 
  
  
  
  
  //버튼
  buttonContainer: {
    width:'70%',
    marginTop:'2%'
  },
  button: {
    alignSelf: 'center',
    width: '80%',
    height: 50,
  },

  
});

const Login = createStackNavigator();

export default class LoginRoute extends Component {
  render() {
    return (
      <Login.Navigator>
        <Login.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Login.Screen
          name="EmailLoginPage"
          component={EmailLoginPage}
          options={{headerShown: false}}
        />
      </Login.Navigator>
    );
  }
}
