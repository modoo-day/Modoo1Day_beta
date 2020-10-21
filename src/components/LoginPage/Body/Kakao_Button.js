import React from 'react';
import {Text, View} from 'react-native';
import Button from 'apsl-react-native-button';


const Kakao_Button = function () {
    return(
        <Button style={{backgroundColor: 'blue'}}>
            <View style={styles.nestedViewStyle}>
                <Text style={styles.nestedTextStyle}>카카오 로그인</Text>
            </View>
        </Button>
    )
}

export default Kakao_Button;