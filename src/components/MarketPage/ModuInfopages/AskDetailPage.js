import React from 'react';
import {View,
        Text,
        StyleSheet,
        Image,
        TouchableOpacity
        } from 'react-native';

const AskDetailPage = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.first}>
                <View style={styles.firstTop}>
                    <Text style={styles.title}>문의 제목</Text>
                    <TouchableOpacity>
                        <Image style={styles.locker} source={require('../../../assets/icons/EmailInput.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.fisrtMid}>
                    <Text style={styles.firstText}>안아ㅣ럼;ㄴ이ㅏㅓㄻ니;ㅏㅇ럼닝ㅁㄴㅇsadfasdfasdfasdfasdfasdfasdfasdfasdfsadfasdfasfasdfasfasfafasf람니;라ㅓㅁ니라ㅓㅁ니ㅏ;럼니ㅏㅇ;럼ㄴㅇ리ㅏㅓㅁㄴㅇ리ㅏㅓㅁㄴㅇ리마;널러ㅏㅁㄴ이;ㅏ러</Text>
                </View>
                <View style={styles.firstBottom}>
                    <TouchableOpacity>
                        <Image style={styles.report} source={require('../../../assets/icons/EmailInput.png')} />
                    </TouchableOpacity>
                    <View style={styles.profile}>
                        <Text style={styles.name}>엄예진</Text>
                        <Text style={styles.date}>2020.10.31</Text>
                    </View>
                </View>
            </View>
            <View style={styles.second}>
                <View style={styles.secondMid}>
                    <Text style={styles.secondText}>미나얼미ㅏ;ㄴ얼;ㅣㅁ낭럼니;ㅏ럼asdfasdfdsfsadfasdfasdfasdfasdfasdfasdfasdfasdfsadfasdfasdfsadfasdfasdfasdfad니ㅏ럼니;ㅏ럼;ㅏㅣㅇ러미;ㅇ나럼ㄴ이ㅏ러ㅣ아럼ㄴ이;ㅏ럼ㄴ아ㅣ;럼이ㅏ럼ㄴ아ㅣ럼ㄴ아ㅣ;러미ㅏ;ㅇ러마이럼ㅇ;ㅣ라ㅓㅁㅇ나ㅣ럼아;렂</Text>
                </View>
                <View style={styles.secondBottom}>
                    <Text style={styles.modu}>-모두의하루</Text>
                </View>
            </View>
        </View>
    )
}

export default AskDetailPage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'pink',
        marginHorizontal:'5%'
        
    },
    first:{
        marginTop:20
        //backgroundColor:'lightgreen'
    },
    firstTop:{
        //backgroundColor:'lightblue',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontFamily:'neodgm',
        fontSize:23,
    },
    locker:{
        width:30,
        height:30
    },
    firstMid:{

    },
    firstText:{
        paddingTop:15
    },
    firstBottom:{
        //backgroundColor:'grey',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingVertical:20,
        borderBottomWidth:1
    },
    report:{
        width:30,
        height:30
    },
    profile:{
        //backgroundColor:'blue',
        width:'45%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    name:{
        fontFamily:'neodgm',
        fontSize:16,
    },
    date:{
        fontFamily:'neodgm',
        fontSize:16,
    },
    second:{
        backgroundColor:'#ffcd2c',
        marginTop:20,
        borderRadius:10,
        padding:10
    },
    secondMid:{

    },
    secondText:{
        
    },
    secondBottom:{

    },
    modu:{
        paddingTop:5,
        textAlign:'right',
        fontFamily:'neodgm',
        fontSize:16,
    },
})