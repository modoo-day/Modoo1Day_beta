import React, {Component, useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import Button from 'apsl-react-native-button';

class InterestPick_btn extends Component {
  state = {
    isChecked: false,
  };
  // 꺼져있는걸 킨다.
  onClick_on = () => {
    if (this.props.hm < 3) {
      this.state.isChecked = true;
      this.props.onclick(this.props.id, true);
    } else {
      Alert.alert('이미 세개를 고르셨습니다.');
    }
  };
  // 켜져있는걸 끈다.
  onClick_off = () => {
    this.state.isChecked = false;
    this.props.onclick(this.props.id, false);
  };

  render() {
    // 켜져있는걸 끈다.
    if (this.state.isChecked === true) {
      return (
        <Button style={styles.ckdBtn} onPress={this.onClick_off}>
          <View>
            <Text style={styles.titleText}>{this.props.name}</Text>
          </View>
        </Button>
      );
    } else {
      // 꺼져있는걸 킨다.
      return (
        <Button style={styles.nckdBtn} onPress={this.onClick_on}>
          <View>
            <Text style={styles.titleText}>{this.props.name}</Text>
          </View>
        </Button>
      );
    }
  }
}
export default InterestPick_btn;

const styles = StyleSheet.create({
  // 체크버튼 노체크 버튼
  ckdBtn: {
    backgroundColor: 'gold',
    borderRadius: 30,
  },
  nckdBtn: {
    backgroundColor: 'white',
    borderRadius: 30,
  },
  titleText: {
    fontSize: 17,
  },
  //텍스트 폰트
});
