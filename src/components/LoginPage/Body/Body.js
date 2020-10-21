import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
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
        <Text style={styles.inputext}>임시 로그인 폼</Text>
        <TextInput
          value={id}
          onChangeText={(username) => setId(username)}
          label="Email"
          style={styles.input}
        />
        <TextInput
          value={pw}
          onChangeText={(password) => setPw(password)}
          label="Password"
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Login'}
          style={styles.input}
          //onPress={}
        />
      </View>

      <Google_Button/>
      <Kakao_Button/>


    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {},
  inputext: {},
});

export default Body;
