import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

function Title() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image source={require('../../../assets/icons/modoo.png')} style={styles.image}/>
      </View>
      <View style={styles.TextContainer}>
          <Text style={styles.text}>모두의 하루</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  
  },
  logoContainer: {
    alignItems:'center', 
    marginBottom:'5%'
  },
  image:{
    width:160, 
    height:123,
  },
  TextContainer:{
    alignItems:'center',
  },
  text: {
    fontSize:48, 
    fontFamily:'neodgm', 
    color:'#ffce2c'
  },
});

export default Title;
