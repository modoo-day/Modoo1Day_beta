import React, {Component} from 'react';
import {StyleSheet, View, Button, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Content = (item) => {
  return (
    <View
      style={{
        width: 105,
        marginLeft: 20,
        marginTop: 15,
        alignItems: 'center',
      }}>
      
        <Image
          source={item.img}
          style={{height: 73, width: 73, marginBottom: 15}}
        />
      
      <View>
        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        <Text numberOfLines={4}>{item.description}</Text>
        <Text>{item.author}</Text>
      </View>
    </View>
  );
};
export default Content;
