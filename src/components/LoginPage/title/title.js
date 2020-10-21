import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

function Title() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icons/modoo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>모두의 하루</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '12%',
    height: '12%',
    paddingHorizontal: '10%',
    marginHorizontal: '3%',
  },
  text: {
    fontSize: 40,
    marginHorizontal: '3%',
  },
});

export default Title;
