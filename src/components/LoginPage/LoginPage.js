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

const LoginPage = ({navigation}) => {
  return (
    <View style={styles.flex1}>
      <View style={styles.title}>
        <Title />
        <View style={styles.flex1}></View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.flex1}></View>
        <View>
          <Kakao_Button />
        </View>
        
        <View style={styles.buttonContainer}>
          <Google_Button />
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

        <View style={styles.tosContianer}>
          <Text style={styles.tosText}>
            로그인을 하시면 이용약관 동의로 간주합니다.
          </Text>
        </View>

        <View style={{flex: 1}}></View>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //버튼
  buttonContainer: {
    marginTop: '4.8%',
  },
  button: {
    alignSelf: 'center',
    width: '80%',
    height: 50,
  },

  //레이아웃
  flex1: {
    flex: 1,
  },
  title: {
    flex: 1,
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  // 이용약관
  tosContianer: {
    marginTop: '10%',
    alignItems: 'center',
  },
  tosText: {
    fontFamily: 'neodgm',
    color: 'gray',
    fontSize: 10,
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
