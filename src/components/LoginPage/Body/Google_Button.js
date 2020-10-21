import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from 'apsl-react-native-button';


const Google_Button = function () {
    return(
        <Button style={{backgroundColor: 'blue'}}>
            <View style={styles.nestedViewStyle}>
                <Text style={styles.nestedTextStyle}>구글 로그인</Text>
            </View>
        </Button>
    )
}

export default Google_Button;

const styles = StyleSheet.create({
    container: {},
    input: {},
    inputext: {},
  });
  