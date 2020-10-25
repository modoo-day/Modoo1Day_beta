import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView,  Dimensions,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');


const TodayMissionPage = () => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image 
                    source={require('../../assets/img/night.png')}
                    style={styles.topImage}
                    />
                    <Text style={styles.topText1}>유의 사항. 유의하라고요 좀. dk wlsWk wha..</Text>
                    <Text style={styles.topText2}>미션에 대한 설명. 내가 왜 설명해야해?</Text>
                </View>
                <View style={styles.mid}>
                    <Text style={styles.midText}>할 일 좀 하고 놀아 게으른 놈아</Text>
                    <TouchableOpacity>
                        <Image style={styles.midImage} source={require('../../assets/icons/camera.png')} />
                    </TouchableOpacity>
                </View>
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

export default TodayMissionPage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'lightgreen'
    },
    top:{
        marginTop:'8%',
        //backgroundColor:'pink',
        width:'75%',
        height:360,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        borderWidth:2.1,
        borderRadius:5
    },
    topImage:{
        width:180,
        height:180
    },
    topText1:{
        width:180,
        marginTop:'10%',
        fontSize:15,
        alignSelf:'center',
        textAlign:'center',
    },
    topText2:{
        width:180,
        marginTop:'10%',
        fontSize:15,
        alignSelf:'center',
        textAlign:'center'
    },
    mid:{
        //backgroundColor:'lightblue',
        marginTop:'2%',
        flex:1,
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        height:80,
        borderBottomWidth:1.3
    },
    midText:{
        fontSize:15,
        textAlign:'center',
        marginRight:'5%',
        width:'58%'
    },
    midImage:{
        width:30,
        height:30
    },
    bottom:{
        //backgroundColor:'lightyellow',
        width:'80%',
        alignSelf:'center',
        marginTop:'5%',
        marginBottom:'5%'
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