import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MarketPage from './MarketPage';


function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../../assets/icons/modoo.png')}
    />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TopNavigation;