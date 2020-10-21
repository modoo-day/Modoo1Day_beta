import React, {Component, useState} from 'react';
import {Text, Button, View, StyleSheet, Image} from 'react-native';
import {TextInput} from 'react-native-paper';

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
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {},
  inputext: {},
});

export default Body;
