import React,{Component} from 'react';
import {View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import {createStackNavigator} from '@react-navigation/stack';
import ReportPage from './ReportPage';


function renderViewMore(onPress){
    return(
      <Text style={styles.more} onPress={onPress}>더보기 ▼</Text>
    )
}

function renderViewLess(onPress){
    return(
      <Text style={styles.less} onPress={onPress}>줄이기 ▲</Text>
    )
  }

const SelfiePage = ({navigation}) =>{
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.loadingText}>📢 모두 인증 및 피드 개시 중</Text>
            <View style={styles.feedContainer}>
                <View style={styles.top}>
                    <View style={styles.profileContainer}>
                        <Image style={styles.profileIcon} source={require('../../../assets/icons/profile.png')}/>
                        <Text style={styles.profileText}>엄예진</Text>
                    </View>
                    <Text style={styles.postTime}>3분전</Text>
                </View>
                <View style={styles.mid}>
                    <Image style={styles.feedImage} source={require('../../../assets/img/example1.jpg')}/>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomIconsContainer}>
                        <TouchableOpacity>                            
                            <Image style={styles.bottomIcon} source={require('../../../assets/icons/o.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('ReportPage')}
                        >
                            <Image style={styles.bottomIcon} source={require('../../../assets/icons/x.png')}/>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.feedTextContianer}>
                        <ViewMoreText
                            numberOfLines={1}
                            renderViewMore={renderViewMore}
                            renderViewLess={renderViewLess}
                            // textStyle={{textAlign: 'center'}}
                        >
                            <Text style={styles.feedText}>동해물과백두산이마르고닳도로고오고하느님이보우하사길이 보전하세 동해물과 백두산이 마륵도로ㅗㄹ두 안녕하세요 제 이름은 동해물과 백두아사아아sk</Text>
                        </ViewMoreText>
                        <View style={styles.tagContainer}>
                            <TouchableOpacity>
                                <Text style={styles.tag}>#물</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.tag}>#물</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.tag}>#물</Text>
                            </TouchableOpacity>  
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

//export default SelfiePage;


const SelfieTabs = createStackNavigator();

export default class SelfiePageRoute extends Component {
  render() {
    return (
      <SelfieTabs.Navigator>
        <SelfieTabs.Screen 
            name="SelfiePage" 
            component={SelfiePage} 
            options={{headerShown: false}}
 
        />
        <SelfieTabs.Screen
          name="ReportPage"
          component={ReportPage}
          //options={{headerShown: false}}
        />
        
      </SelfieTabs.Navigator>
    );
  }
}





const styles = StyleSheet.create({
    container:{

    },
    loadingText:{
        fontFamily:'neodgm',
        marginVertical:10,
        marginLeft:'5%'
    },
    feedContainer:{
        flex:1,
        //backgroundColor:'lightyellow'
    },
    top:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:'5%'
    },
    profileContainer:{
        flex:0.21,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        //backgroundColor:'pink',
        },
    profileIcon:{
        width:30,
        height:30
    },
    profileText:{

    },
    postTime:{

    },
    mid:{
        width:'100%',
        height:250
    },
    feedImage:{
        width:'100%',
        height:'100%'
    },
    bottom:{

    },
    bottomIconsContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'3%',
        marginVertical:'5%'
    },
    bottomIcon:{
        width:30,
        height:30
    },
    feedTextContianer:{
        //backgroundColor:'lightblue',
        height:160,
        width:'90%',
        alignSelf:'center'
    },
    more:{
        fontFamily:'neodgm',
        fontSize:15,
        textAlign:'right'
      },
      less:{
        fontFamily:'neodgm',
        fontSize:15,
        textAlign:'right'
      },
    feedText:{
        fontWeight:'bold',
        fontSize:15,
        textAlign:'left'
    },
    tagContainer:{
        flex:1,
        flexDirection:'row',
        marginTop:'9%'
    },
    tag:{
        fontFamily:'neodgm',
        marginLeft:'4%'
    }

})