import React from 'react';
import {View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';


const Head = ({navigation}) => {
    return(
        
        <View style={{flexDirection:'row', alignContent:'center',justifyContent:'center', marginTop:10,marginBottom:10}}>
              
  
              <View style={{marginLeft:25}}>
                <TouchableOpacity onPress={() => navigation.navigate('MarketPage')}>
                  <Image source={require('../../../assets/icons/modoo.png')} style={{width: 40, height:40}}/>
                </TouchableOpacity>
              </View>
  
              <View style={{marginLeft:25}}>
                  
                
                <TouchableOpacity onPress={() => navigation.navigate('SearchPage')}>
                  <Image source={require('../../../assets/icons/search.png')} style={{width: 40, height:40}}/>
                </TouchableOpacity>
              </View>
  
  
              
        </View>

    )
}

export default Head;