import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import Button from 'apsl-react-native-button';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {createStackNavigator} from '@react-navigation/stack';
import AskDetailPage from './AskDetailPage';
import AskWritePage from './AskWritePage';


const AskPage = ({navigation}) =>{
    return(
        <ScrollView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.buttonLayout} 
                    textStyle={styles.buttonText}
                    disabledStyle={{backgroundColor:'white'}}
                    isDisabled={false}
                    isLoading={false}
                    onPress={()=>navigation.navigate('문의 하기')}
                >
                문의 하기
                </Button>
            </View>
            <View style={styles.listContianer}>
                {/* 버튼에 삼항연산자가 필요할 것으로 보임. */}
                <TouchableOpacity
                    onPress={()=> navigation.navigate('문의 상세 보기')}
                >
                    <View style={styles.postContainer}>
                        <View style={styles.postTitleContainer}>
                            <Text style={styles.title}>문의 제목</Text>
                        </View>
                        <View style={styles.postBottomContainer}>
                            <Text style={styles.bottomText}>엄에진</Text>
                            <Text style={styles.bottomText}>2020.10.31</Text>
                            <View style={styles.buttonContainer2}>
                                <Button
                                    style={styles.buttonLayout2} 
                                    textStyle={styles.buttonText2}
                                    disabledStyle={{backgroundColor:'white'}}
                                    isDisabled={false}
                                    isLoading={false}
                                    // onPress={()=>navigation.navigate('리뷰 쓰기')}
                                >
                                답변완료
                                </Button>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={styles.postContainer}>
                        <View style={styles.postTitleContainer}>
                            <Text style={styles.title}>문의 제목</Text>
                        </View>
                        <View style={styles.postBottomContainer}>
                            <Text style={styles.bottomText}>엄에진</Text>
                            <Text style={styles.bottomText}>2020.10.31</Text>
                            <View style={styles.buttonContainer2}>
                                <Button
                                    style={styles.buttonLayout2} 
                                    textStyle={styles.buttonText2}
                                    disabledStyle={{backgroundColor:'white'}}
                                    isDisabled={true}
                                    isLoading={false}
                                   // onPress={()=>navigation.navigate('문의 상세 보기')}
                                >
                                답변준비중
                                </Button>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>

        
    )    
}

// export default ReviewPage;

const AskTabs = createStackNavigator();

export default class AskPageRoute extends Component {
  render() {
    return (
      <AskTabs.Navigator>
        <AskTabs.Screen 
            name="AskPage" 
            component={AskPage} 
            options={{headerShown: false}}
 
        />
        <AskTabs.Screen
            name='문의 하기'
            component={AskWritePage}
            //options={{headerShown: false}}
        />
        <AskTabs.Screen
            name='문의 상세 보기'
            component={AskDetailPage}
            //options={{headerShown: false}}
        />
        
      </AskTabs.Navigator>
    );
  }
}




const styles = StyleSheet.create({
    container:{
    //    backgroundColor:'lightblue'
    },
    buttonContainer:{
        backgroundColor:'pink',
        height:50
    },
    buttonLayout: {
        backgroundColor: '#ffcd2c',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        height: '100%',
        borderRadius:0
    },
    buttonText: {
        fontFamily: 'neodgm',
        fontSize: RFPercentage(3),
    },
    listContianer:{
        
        //backgroundColor:'lightgreen',
        
    },
    postContainer:{
        height:85,
        borderBottomWidth:0.9,
       // backgroundColor:'lightyellow',
    },
    postTitleContainer:{
       // backgroundColor:'pink',
        height:50,
        marginTop:'2.2%',
        marginHorizontal:'5%'
    },
    title:{
        fontSize:20,
        fontFamily:'neodgm'
    },
    postBottomContainer:{
    //   backgroundColor:'grey',
        flexDirection:'row',
        justifyContent:'space-between',
        // alignItems:'baseline',
        marginHorizontal:'5%',
        flex:1
    },
    bottomText:{
        fontFamily:'neodgm',
        fontSize:15
    },
    buttonContainer2:{
    //    backgroundColor:'pink',
        flex:0.5
    },
    buttonLayout2: {
        backgroundColor: '#ffcd2c',
        borderRadius:0,
        height:'90%',
        width:'100%'
    },
    buttonText2:{
        fontFamily:'neodgm',
        fontSize: RFPercentage(1.7),

    }
    
})