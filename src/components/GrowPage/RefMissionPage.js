import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import Button from 'apsl-react-native-button';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');


const RefMissionPage =()=>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.topText1}>참고하기</Text>
                    <View style={styles.contentsContainer}>
                        <Text style={styles.topText2}>내용</Text>
                    </View>
                    <View style={styles.contentsContainer}>
                        <Text style={styles.topText2}>내용</Text>
                    </View>
                    <View style={styles.contentsContainer}>
                        <Text style={styles.topText2}>내용</Text>
                    </View>
                    <View style={styles.contentsContainer}>
                        <Text style={styles.topText2}>내용</Text>
                    </View>
                    <View style={styles.refreshContainer}>
                        <TouchableOpacity>
                            <Image style={styles.refresh} source={require('../../assets/icons/refresh.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.refreshText}> 0 / 2 </Text>
                    </View>
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

export default RefMissionPage;

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
        marginTop:'8%',
        fontFamily:'neodgm',
        fontSize:16
    },
    topText2:{
        textAlign:'center',
        fontSize:18
    },
    contentsContainer:{
        marginTop:'10%',
        width:'80%',
        backgroundColor:'pink'
    },
    topImage:{
        width:'80%',
        height:80,
        marginTop:'10%'
    },
    refreshContainer:{
        flex:1,
        flexDirection:'row',
        marginTop:'10%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'10%'
    },
    refresh:{
        width:40,
        height:40,
        marginRight:'6%'
    },
    refreshText:{
        fontFamily:'neodgm',
        fontSize: 17
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