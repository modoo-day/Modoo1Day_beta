import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from 'apsl-react-native-button';




const LocalLogin_Button = () => {
    return(
        <View style={{flex:1}}>
            <View style={{alignSelf:'center' , marginTop:-100}}>
                <Button 
                    style={{ height:65, width:350, backgroundColor:'#55acee', borderColor: '#2875af'}}
                    activeOpacity={1}
                    >
                    <View style={{ alignItems:'center', flex:1, flexDirection:'row'}} >
                        <View style={{ marginRight:26, marginLeft:26,}}>
                            <Image source={require('../../../assets/icons/LocalLoginLogo.png')} style={{height:45, width:39}} />
                        </View>
                        <View style={{marginRight:30}}>
                            <Image source={require('../../../assets/icons/loginBorder.png')} style={{height:62}}/>
                        </View>
                            <Text style={{fontFamily:'NanumBarunGothicBold', fontSize:20, color:'white'}}>      이메일로 로그인</Text>
                    </View>
                </Button>
                <View style={{marginTop:40,height:40, alignItems:'center'}}>
                        <Text style={{fontFamily:'neodgm', color:'#a7a7a7'}}>로그인을 하시면 이용약관 동의로 간주합니다.</Text>
                    </View>
            </View>
            
        </View>
    )
}

export default LocalLogin_Button;