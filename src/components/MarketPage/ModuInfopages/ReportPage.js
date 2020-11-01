import React from 'react';
import {View, Text, StyleSheet, AppRegistry} from 'react-native';
import Button from 'apsl-react-native-button';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


const ReportPage =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.first}>
                <Text>이 게시물을 신고하는 이유</Text>
            </View>
            <View style={styles.second}>
                <Button
                    style={styles.buttonLayout} 
                    textStyle={styles.buttonText}
                    disabledStyle={{backgroundColor:'white'}}
                    isDisabled={false}
                    isLoading={false}
                    //onPress={()=>navigation.navigate('리뷰 쓰기')}
                >
                스팸
                </Button>
            </View>
            <View style={styles.third}>
                <Collapse style={{borderBottomWidth:1,borderTopWidth:1}}>
                    <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
                        <View>
                            <Text>신고</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <Button
                            style={styles.buttonLayout1} 
                            textStyle={styles.buttonText}
                            disabledStyle={{backgroundColor:'white'}}
                            isDisabled={false}
                            isLoading={false}
                           // onPress={()=>navigation.navigate('리뷰 쓰기')}
                        >
                        신고 사유 1
                        </Button>
                        <Button
                            style={styles.buttonLayout2} 
                            textStyle={styles.buttonText}
                            disabledStyle={{backgroundColor:'white'}}
                            isDisabled={false}
                            isLoading={false}
                           // onPress={()=>navigation.navigate('리뷰 쓰기')}
                        >
                        신고 사유 2
                        </Button>
                        <Button
                            style={styles.buttonLayout2} 
                            textStyle={styles.buttonText}
                            disabledStyle={{backgroundColor:'white'}}
                            isDisabled={false}
                            isLoading={false}
                           // onPress={()=>navigation.navigate('리뷰 쓰기')}
                        >
                        신고 사유 3
                        </Button>
                    </CollapseBody>
                </Collapse> 
            </View>
        </View>
    )
}

export default ReportPage;

const styles = StyleSheet.create({
    first:{

    },
    second:{
        backgroundColor:'pink',
        height:50
    },
    buttonLayout: {
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        height: '100%',
        borderRadius:0
    },
    buttonText: {
        fontFamily: 'neodgm',
        fontSize: RFPercentage(3),
    },
    third:{
        // backgroundColor:'pink',
        height:200
    },
    buttonLayout1: {
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        height: 50,
        borderRadius:0,
        // marginTop:'-3%'
    },
    buttonLayout2: {
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        height: 50,
        borderRadius:0,
        marginTop:'-4%'
    },

})


AppRegistry.registerComponent('Panels', () => Panels);
