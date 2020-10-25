import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Dimensions,} from 'react-native';
import Button from 'apsl-react-native-button';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');


const SelfMissionPage =()=>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.topText1}>추가 미션 이름</Text>
                    <Image style={styles.topImage} source={require('../../assets/img/night.png')}/>
                    <Text style={styles.topText2}>미션 내용:영현이와 춤추다가 예진이누나한테 들켜셔 정우형한테 노래방 끌려가고 불휘형이 기아타이거즈</Text>
                    <Text style={{margin:30, }}>알림시간 설정이 들어갈 자리~! 이 부분은 스타일시트 안 만들었지롱</Text>
                    <Button
                        style={styles.button} 
                        textStyle={styles.buttonText}
                        disabledStyle={{backgroundColor:'white'}}
                        isDisabled={false}
                        isLoading={false}
                    >추가하라고 꼴받게 시리</Button>
                </View>
                <View style={styles.mid}></View>
                <View style={styles.bottom}>
                    <Swiper 
                        style={styles.wrapper} 
                        showsButtons={false}
                        autoplay
                    >
                        <View style={styles.slide1}>
                            <View style={styles.b_imageContainer}>
                                <Image
                                source={require('../../assets/img/night.png')}
                                style={styles.b_image}
                                />
                            </View>
                        
                        </View>

                        <View style={styles.slide2}>
                            <View style={styles.b_imageContainer}>
                                <Image
                                source={require('../../assets/img/night.png')}
                                style={styles.b_image}
                                />
                            </View>
                        </View>

                        <View style={styles.slide3}>
                            <View style={styles.b_imageContainer}>
                                <Image
                                source={require('../../assets/img/night.png')}
                                style={styles.b_image}
                                />
                            </View>
                        </View>

                    </Swiper>
                </View>
            </View>
        </ScrollView>
    )
}

export default SelfMissionPage;

const styles = StyleSheet.create({
    container:{
        //backgroundColor:'lightgreen',
        flex:1
    },
    top:{
        //backgroundColor:'pink',
        alignItems:'center',
        marginTop:'8%',
        borderWidth:2,
        borderRadius:10,
        width:'75%',
        alignSelf:'center',
    },
    topText1:{
        textAlign:'center',
        fontSize:15,
        marginTop:'10%',
        fontFamily:'neodgm',
        fontSize:16
    },
    topText2:{
        marginTop:'10%',
        width:'80%'
    },
    topImage:{
        width:'80%',
        height:80,
        marginTop:'10%'
    },
    button:{
        marginTop:'10%',
        width:'30%',
        alignSelf:'center',
        height:30,
        borderWidth:2
    },
    buttonText:{
        fontFamily:'neodgm'
    },
    mid:{
        height:50,
        borderBottomWidth:1.3
    },
    bottom:{
        //backgroundColor:'lightblue',
        alignSelf:'center',
        marginTop:'10%',
        marginBottom:'5%',
        width:'80%',
        
    },

    /* 배너 */
    wrapper: {
        height:130,
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    b_imageContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'pink',
    },
    b_image:{
        width:width,
    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },

})