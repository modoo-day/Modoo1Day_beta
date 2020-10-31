import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import Button from 'apsl-react-native-button';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';



const AskWritePage = () =>{
    return(
        <ScrollView contentContainerStyle={{maxHeight:'200%'}}>

            <View style={styles.container}>
                <View style={styles.top}>
                    <Text>
                        <Text style={styles.title}>물 마시기</Text>
                        <Text style={styles.topText1}>에</Text>
                    </Text>
                    <Text style={styles.topText2}>대해 궁금하신가요?</Text>
                </View>
                <View style={styles.mid}>
                    <Text style={styles.midText}>* 답변은 영업일 기준 2~3일 소요됩니다.</Text>
                    <Text style={styles.midText}>* 해당 게시판의 성격과 다른 글은 사전동의 없이 삭제 될 수 있습니다.</Text>
                    <View style={styles.titleInputContainer}>
                        <TextInput
                            style={styles.titleInput}
                        ></TextInput>
                        <TouchableOpacity>
                            <Image style={styles.locker} source={require('../../../assets/icons/EmailInput.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                    ></TextInput>
                </View>


                <View style={styles.bottomButtonContainer}>
                        <Button
                            style={styles.bottomButtonLayout} 
                            textStyle={styles.bottomButtonText}
                            disabledStyle={{backgroundColor:'white'}}
                            isDisabled={false}
                            isLoading={false}
                            //onPress={()=>navigation.navigate('AskWritePage')}
                        >
                        등록하기
                        </Button>
                    </View>
            </View>
        </ScrollView>
    )
}
export default AskWritePage;

const styles = StyleSheet.create({
    container:{
        
       // backgroundColor:'pink',
        alignItems:'center',
        marginHorizontal:'8%'
    },
    top:{
        marginTop:'7%'
    },
    title:{
        fontFamily:'neodgm',
        fontSize:30
    },
    topText1:{
        fontFamily:'neodgm',
        fontSize:16
    },
    topText2:{
        fontFamily:'neodgm',
        fontSize:16,
        textAlign:'center',
        marginTop:'2%'
    },
    mid:{
        marginTop:'6%',
        //borderBottomWidth:1,
        //backgroundColor:'pink',
        height:'17%',

    },
    titleInputContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'lightblue',
        borderBottomWidth:1,
        borderTopWidth:1,
        marginTop:'5%',
    },
    locker:{
        width:30,
        height:30,
    },
    titleInput:{
        width:250,
        fontSize:17,
        //backgroundColor:'lightyellow',
        alignSelf:'center',
        marginRight:'2%'
    },
    midText:{
        fontFamily:'neodgm',   
        textAlign:'center',
        fontSize:11,
        marginTop:3
    },
    midLine:{
        height:40,
        width:'80%',
       // backgroundColor:'lightblue',
        borderBottomWidth:1,
        
    },
    bottom:{
       // backgroundColor:'lightyellow',
        marginTop:'15%',
        width:'100%',
        height:'25%',
        borderWidth:1,
        borderRadius:10
    },
    input:{
        height:'100%',
        width:'100%',
        fontSize:17
    },
    bottomButtonContainer:{
        marginTop:'15%',
        backgroundColor:'pink',
        height:100,
        width:'60%'
    },
    bottomButtonLayout: {
        backgroundColor: '#ffcd2c',
        borderWidth: 2,
        height: '100%',
        borderRadius:10
    },
    bottomButtonText: {
        fontFamily: 'neodgm',
        fontSize: RFPercentage(3),
    },
})