import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import Button from 'apsl-react-native-button';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';



const ReviewWritePage = () =>{
    return(
        <ScrollView contentContainerStyle={{maxHeight:'200%'}}>

            <View style={styles.container}>
                <View style={styles.top}>
                    <Text>
                        <Text style={styles.title}>물 마시기</Text>
                        <Text style={styles.topText1}>의</Text>
                    </Text>
                    <Text style={styles.topText2}>경험이 어땠나요?</Text>
                </View>
                <View style={styles.mid}>
                    <AirbnbRating
                        count={5}
                        showRating={false}
                        //reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                        defaultRating={5}
                        size={40}
                    />
                    <Text style={styles.ratingText}>별점을 선택해주세요!</Text>
                </View>
                <View style={styles.midLine}></View>
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
                            //onPress={()=>navigation.navigate('ReviewWritePage')}
                        >
                        등록하기
                        </Button>
                    </View>
            </View>
        </ScrollView>
    )
}
export default ReviewWritePage;

const styles = StyleSheet.create({
    container:{
        
       // backgroundColor:'pink',
        alignItems:'center'
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
    },
    ratingText:{
        fontFamily:'neodgm',   
        textAlign:'center',
        marginTop:'6%',
    },
    midLine:{
        height:40,
        width:'80%',
       // backgroundColor:'lightblue',
        borderBottomWidth:1,
    },
    bottom:{
       // backgroundColor:'lightyellow',
        marginTop:'10%',
        width:'80%',
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