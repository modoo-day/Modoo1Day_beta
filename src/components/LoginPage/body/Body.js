import React from 'react';
import {View, Image, TextInput, Text} from 'react-native';



    
  
const Body = () => {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    return(
        
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                <Image source={require('../../../assets/icons/photo.png')} style={{height:20, width:20}}/>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    />

        </View>
    
      
    )
}

export default Body;