import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';


const ReviewWritePage = () =>{
    return(
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
            <View style={styles.bottom}>
                <TextInput></TextInput>
            </View>
        </View>
    )
}
export default ReviewWritePage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
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
        marginTop:'6%'
    },
    ratingText:{
        fontFamily:'neodgm',   
        textAlign:'center',
        marginTop:'6%'
    },
    bottom:{
        backgroundColor:'lightyellow',
        marginTop:'10%'
    },
})