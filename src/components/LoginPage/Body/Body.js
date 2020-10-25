import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Button from 'apsl-react-native-button';
import Kakao_Button from './Kakao_Button';
import Google_Button from './Google_Button';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {TextInput} from 'react-native-paper';
import Navigations from '../../MarketPage/Navigations';
import {createStackNavigator} from '@react-navigation/stack';
import MarketPage from '../../MarketPage/MarketPage';



export default class Body extends Component{
  state={
    username :'',
    password :'',
    errMsg:'',
  }

  onLogin = () =>{
    if(this.state.username == 'test' && this.state.password == 'test'){
      this.props.navigation.navigate('Home')
    }else{
      this.setState({errMsg:'Invalid login details.'})
    }
  }
  render(){
    
  

  //const [id, setId] = useState('');
  //const [pw, setPw] = useState('');
  

  

  return (
    <View style={styles.container}>
      {/* 아이디 입력창 */}
      <View style={styles.idContainer}>
        <TextInput
          mode='outlined'
          textContentType="emailAddress"
        //value={id}
         // onChangeText={(username) => setId(username)}
           onChangeText={(text) => this.setState({username:text})}

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
        //value={pw}
          //onChangeText={(password) => setPw(password)}
          onChangeText={(text) => this.setState({password:text})}
          placeholder={'비밀번호'}
          secureTextEntry={true}
          style={styles.input}
          theme={{
            roundness:50,
            colors:'black'
            }}
        />
      </View>

          <Text style={{color:'red',textAlign:'center'}}>{this.state.errMsg}</Text>
      {/* 시작 버튼 */}
      <View style={styles.startContainer}>
        <Button 
        style={styles.startButton} 
        textStyle={styles.startText}
        activeOpacity={0.5}
        disabledStyle={{backgroundColor:'white'}}
        isDisabled={false}
        isLoading={false}
        onPress={this.onLogin}
        
        >
          시작하기!
        </Button>
      </View>
    </View>
  );
}};






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
    marginTop: '4%',
    borderRadius:50
  },
  startText: {
    fontFamily: 'neodgm',
    fontSize: RFPercentage(3),
  },
});
