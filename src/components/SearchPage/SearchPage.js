import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const SearchPage = () => {
    // 서치 페이지에서 로딩 테스트하는 중
  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./40-loading.json")}
        animationStyle={styles.lottie}
        speed={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  lottie: {width: 100, height: 100},
});

export default SearchPage;
