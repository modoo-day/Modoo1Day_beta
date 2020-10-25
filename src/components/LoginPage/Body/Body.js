import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Button from 'apsl-react-native-button';
import Kakao_Button from './Kakao_Button';
import Google_Button from './Google_Button';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {TextInput} from 'react-native-paper';



const Body = function () {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <View style={styles.container}>
      {/* 아이디 입력창 */}
      <View style={styles.idContainer}>
        <TextInput
          mode='outlined'
          textContentType="emailAddress"
          value={id}
          onChangeText={(username) => setId(username)}
          placeholder={'아이디'}
          style={styles.input}
          theme={{
            roundness:50,
            colors:'black'
            }}
        />
      </View>

      {/* 비밀번호 입력창 */}
      <View style={styles.pwContainer}>
        <TextInput
          mode='outlined'
          value={pw}
          onChangeText={(password) => setPw(password)}
          placeholder={'비밀번호'}
          secureTextEntry={true}
          style={styles.input}
          theme={{
            roundness:50,
            colors:'black'
            }}
        />
      </View>

      {/* 시작 버튼 */}
      <View style={styles.startContainer}>
        <Button 
        style={styles.startButton} 
        textStyle={styles.startText}
        activeOpacity={0.5}
        disabledStyle={{backgroundColor:'white'}}
        isDisabled={true}
        isLoading={false}
        
        >
          시작하기!
        </Button>
      </View>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  idContainer: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  pwContainer: {
    flexDirection: 'row',
  },
  input: {
    fontSize: RFPercentage(2),
    height: 40,
    width: '57%',
    borderRadius: 50,
    textAlign: 'center',
  },
  inputTheme: {},
  startButton: {
    width: '70%',
    backgroundColor: '#ffcd2c',
    borderWidth: 2,
    height: '35%',
    marginTop: '9%',
    borderRadius:50
  },
  startText: {
    fontFamily: 'neodgm',
    fontSize: RFPercentage(3),
  },
});
