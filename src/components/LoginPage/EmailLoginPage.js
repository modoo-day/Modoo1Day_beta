import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {NavigationContainer} from '@react-navigation/native';

import Body from './Body/Body';
import EmailCheck from './SignUp/EmailCheck';
import PasswordCheck from './SignUp/PasswordCheck';

const EmailLoginPage = ({navigation, route}) => {
  return (
    <View style={styles.flex1}>
      {/* <Title /> */}
      <View style={styles.container}>
        <Body />
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('EmailCheck')}>
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
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomButtonsContainer: {
    alignItems: 'center',
    marginTop: '-13%',
  },
  text: {
    fontFamily: 'neodgm',
    fontSize: RFPercentage(1.8),
  },
  idpwContainer: {
    marginTop: '3%',
  },
});

const Login = createStackNavigator();

export default class EmailLoginRoute extends Component {
  render() {
    return (
      <Login.Navigator>
        <Login.Screen name="EmailLoginPage" component={EmailLoginPage} />
        <Login.Screen
          name="EmailCheck"
          component={EmailCheck}
          options={{headerShown: false}}
        />
        <Login.Screen
          name="PasswordCheck"
          component={PasswordCheck}
          options={{headerShown: false}}
        />
      </Login.Navigator>
    );
  }
}
