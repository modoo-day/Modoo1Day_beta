import React, {useState} from 'react';
import {View, Alert, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TagsChild = (Tag) => {
  function tagFirst() {
    Alert.alert(Tag[0]);
  }
  function tagSecond() {
    Alert.alert(Tag[1]);
  }

  return (
    <View style={{flexDirection: 'row', bottom: '1%'}}>
      <TouchableOpacity onPress={tagFirst}>
        <Text style={styles.listTag}>#{Tag[0]} </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={tagSecond}>
        <Text style={styles.listTag}>#{Tag[1]}</Text>
      </TouchableOpacity>
      <Text style={styles.listTag}>{'\n'}</Text>
    </View>
  );
};

export default TagsChild;

const styles = StyleSheet.create({
  listTag: {
    fontFamily: 'neodgm',
    fontSize: 16,
  },
});
