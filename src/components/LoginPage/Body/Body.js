import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import Button from 'apsl-react-native-button'
import Kakao_Button from './Kakao_Button';
import Google_Button from './Google_Button';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const Body = function() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    
      <View style={styles.container}>
        
        {/* 아이디 입력창 */}
        <View style={styles.idContainer}>
        
          
          <TextInput
            textContentType='emailAddress'
            value={id}
            onChangeText={(username) => setId(username)}
            placeholder={'아이디'}
            style={styles.input}
            />
        </View>
        
        {/* 비밀번호 입력창 */}
        <View style={styles.pwContainer}>
          
          <TextInput
          
            value={pw}
            onChangeText={(password) => setPw(password)}
            placeholder={'비밀번호'}
            secureTextEntry={true}
            style={styles.input}
            
            
            />
        </View>
        
        
        {/* 시작 버튼 */}
        <View style={styles.startContainer}>
          <Button 
          style={styles.startButton}
          textStyle={styles.startText}
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
    flex:1,
    alignItems:'center',
    backgroundColor:'pink',
    justifyContent:'center'
  },
  flex1:{
    flex:1,
  },
  idContainer: {
    flexDirection:'row',
  },
  pwContainer: {
    flexDirection:'row', 
  },
  startContainer:{
    
  },
  input:{
    fontSize: RFPercentage(2),
    height:40,
    width:'57%',
    borderWidth:1,
    borderRadius:50,
    textAlign:'center',
  },
  inputTheme:{

  },
  startButton:{
    width:'70%',
    backgroundColor:'#ffcd2c', 
    borderRadius:50, 
    borderWidth:2, 
    height:59
  },
  startText:{
    fontFamily:'neodgm', 
    fontSize:20,
  },
  
  
  });
