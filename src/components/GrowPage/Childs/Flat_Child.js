import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

const Flat_Child = (item) => {
  if (item.index === 0) {
    return (
      <View style={styles.category}>
        <Text style={styles.categoryText}>진행 중인 하루 / 협동</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.listItemContainer}>
        <Image source={item.item.img} style={styles.listItemImage} />
        <View>
          <Text style={styles.listItemText1}>{item.item.name}</Text>
        </View>
      </View>
    );
  }
};
export default Flat_Child;

const styles = StyleSheet.create({
  position: {
    alignItems: 'center',
  },

  //콘텐츠 카테고리
  category: {
    marginTop: '8%',
    marginBottom: '15%',
    marginLeft: '4%',
  },
  categoryText: {
    fontFamily: 'neodgm',
    fontSize: 20,
  },

  //플랫리스트 디자인
  listStyle: {},
  listItemContainer: {
    width: 240,
    height: 240,
    marginLeft: 4,
    alignItems: 'center',
    marginBottom: '10%',
  },
  listItemImage: {
    height: '75%',
    width: '75%',
    marginBottom: '9%',
  },
  listItemText1: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'neodgm',
  },
});
