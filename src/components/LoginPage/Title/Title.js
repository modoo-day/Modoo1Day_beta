import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


function Title() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
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
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageContainer: {
    width: RFPercentage(19),
    height: RFPercentage(19)
  },
  image:{
    width: '100%',
    height: '100%',
  },
  TextContainer:{
    marginTop: '5%',
  },
  text: {
    fontSize: RFPercentage(6), 
    fontFamily:'neodgm', 
    color:'#ffce2c'
  },
});

export default Title;