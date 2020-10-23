import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TextInput} from 'react-native-paper';
import Button from 'apsl-react-native-button'
import Kakao_Button from './Kakao_Button';
import Google_Button from './Google_Button';


const Body = function() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <>
      <View style={styles.container}>
        {/* 아이디 입력창 */}
        <View style={{flex:1, flexDirection:'row' }}>
          
          <TextInput
            mode='outlined'
            value={id}
            onChangeText={(username) => setId(username)}
            placeholder={'아이디'}
            style={styles.input}
            theme={{
              roundness:50,
              colors:'black'}}
            />
        </View>
        
        {/* 비밀번호 입력창 */}
        <View style={{flex:1, flexDirection:'row', marginBottom:20}}>
          
          <TextInput
            mode='outlined'
            value={pw}
            onChangeText={(password) => setPw(password)}
            placeholder={'비밀번호'}
            secureTextEntry={true}
            style={styles.input}
            theme={{
              roundness:50,
              colors:'black'}}
            
            />
        </View>
        
        
        {/* 시작 버튼 */}
        <View>
          <Button 
          style={{width:'70%',backgroundColor:'#ffcd2c', borderRadius:50, borderWidth:2, height:55}}
          textStyle={{fontFamily:'neodgm', fontSize:20}}
          >
            시작하기!
          </Button>
        </View>

        
      </View>

    </>
  );
};


export default Body;

const styles = StyleSheet.create({
  container: {height:200,alignItems:'center'},
  input: {width:'53%', height:45, textAlign:'center'}
});
