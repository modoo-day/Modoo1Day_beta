import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer,CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MarketPage from '../MarketPage/MarketPage';
import SearchPage from '../SearchPage/SearchPage';
import { TouchableOpacity } from 'react-native-gesture-handler';



const LogoTitle = () => {
  return (
      <View style={{flex:1, flexDirection:'row'}}>
          <TouchableOpacity onPress={() => CommonActions.navigate('MarketPage')}>
            <Image
                style={{ width: 50, height: 50 }}
                source={require('../../assets/icons/modoo.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => CommonActions.navigate('SearchPage')}>
            <Image
                style={{ width: 50, height: 50 }}
                source={require('../../assets/icons/search.png')}
            />
          </TouchableOpacity>


      </View>
    
  );
}

const Stack = createStackNavigator();

const TopNavigation = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MarketPage"
          component={MarketPage}
          options={{ headerTitle: props => <LogoTitle {...props} /> }}
        />
        <Stack.Screen 
            name="SearchPage" 
            component={SearchPage} 
            options={{ headerTitle: props => <LogoTitle {...props} /> }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TopNavigation;
