import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import Button from 'apsl-react-native-button';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {createStackNavigator} from '@react-navigation/stack';
import ReviewWritePage from './ReviewWritePage';




const ReviewPage = ({navigation}) =>{
    return(
        <ScrollView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.buttonLayout} 
                    textStyle={styles.buttonText}
                    disabledStyle={{backgroundColor:'white'}}
                    isDisabled={false}
                    isLoading={false}
                    onPress={()=>navigation.navigate('ReviewWritePage')}
                >
                리뷰 쓰기
                </Button>
            </View>
            <View style={styles.listContianer}>
                <TouchableOpacity>
                    <View style={styles.postContainer}>
                        <View style={styles.postTitleContainer}>
                            <Text style={styles.title}>리뷰 내용</Text>
                        </View>
                        <View style={styles.postBottomContainer}>
                            <Text style={styles.bottomText}>엄에진</Text>
                            <Text style={styles.bottomText}>2020.10.31</Text>
                            <View style={styles.ratingContainer}>
                                <Rating
                                    // count={5}
                                    // defaultRating={5}
                                    // size={5}
                                    showRating={false}
                                    readonly 
                                    startingValue={5}
                                    imageSize={20}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.postContainer}>
                        <View style={styles.postTitleContainer}>
                            <Text style={styles.title}>리뷰 내용</Text>
                        </View>
                        <View style={styles.postBottomContainer}>
                            <Text style={styles.bottomText}>엄에진</Text>
                            <Text style={styles.bottomText}>2020.10.31</Text>
                            <View style={styles.ratingContainer}>
                                <Rating
                                    // count={5}
                                    // defaultRating={5}
                                    // size={5}
                                    showRating={false}
                                    readonly 
                                    startingValue={5}
                                    imageSize={20}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.postContainer}>
                        <View style={styles.postTitleContainer}>
                            <Text style={styles.title}>리뷰 내용</Text>
                        </View>
                        <View style={styles.postBottomContainer}>
                            <Text style={styles.bottomText}>엄에진</Text>
                            <Text style={styles.bottomText}>2020.10.31</Text>
                            <View style={styles.ratingContainer}>
                                <Rating
                                    // count={5}
                                    // defaultRating={5}
                                    // size={5}
                                    showRating={false}
                                    readonly 
                                    startingValue={5}
                                    imageSize={20}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                
                
            </View>
        </ScrollView>

        
    )    
}

// export default ReviewPage;

const ReviewTabs = createStackNavigator();

export default class ReviewPageRoute extends Component {
  render() {
    return (
      <ReviewTabs.Navigator>
        <ReviewTabs.Screen 
            name="ReviewPage" 
            component={ReviewPage} 
            options={{headerShown: false}}
 
        />
        <ReviewTabs.Screen
          name="ReviewWritePage"
          component={ReviewWritePage}
          //options={{headerShown: false}}
        />
        
      </ReviewTabs.Navigator>
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
      //  backgroundColor:'grey',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'baseline',
        marginHorizontal:'5%'
    },
    bottomText:{
        fontFamily:'neodgm',
        fontSize:15
    },
    ratingContainer:{
    
    },
    
})