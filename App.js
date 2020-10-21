
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LoginPage from './src/components/LoginPage/LoginPage';

const App: () => React$Node = () => {
  return (
    <>

      <LoginPage />

    </>
  );
};


export default App;
