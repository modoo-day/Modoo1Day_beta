// import React, {Component} from 'react';
// import {StyleSheet, View, Button, Text} from 'react-native';
// import AnimatedLoader from 'react-native-animated-loader';

// const SearchPage = () => {
//     // 서치 페이지에서 로딩 테스트하는 중
//   return (
//     // <View style={styles.container}>
//     //   <AnimatedLoader
//     //     visible={true}
//     //     overlayColor="rgba(255,255,255,0.75)"
//     //     source={require("./req.json")}
//     //     animationStyle={styles.lottie}
//     //     speed={2}
//     //   />
//     // </View>
//     <View>
//       <Text>안녕하세요</Text>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   backgroundColor: '#F5FCFF',
//   //   flexDirection: 'column'                                                                                                                                                                                                                                                                                                                                                                                                
//   // },
//   // lottie: {width: 800, height: 800},
// });

// export default SearchPage;



import React, { Component } from "react";
import { View, Text, FlatList, Button, StyleSheet, Image } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
 

class SearchPage extends Component {
 

  
  constructor(props) {
    super(props); 
  
    this.state = { 
      loading: false,   
      data: [],
      temp: [],
      error: null,
      search: null
    };
  }
  
  componentDidMount() {
    this.getData();
  }
 
   getData = async ()  => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    this.setState({ loading: true });
      
     try {
        const response = await fetch(url);
        const json = await response.json();
        this.setResult(json);
     } catch (e) {
        this.setState({ error: 'Error Loading content', loading: false });
     }
  };
 
  setResult = (res) => {
    this.setState({
      data: [...this.state.data, ...res],
      temp: [...this.state.temp, ...res],
      error: res.error || null,
      loading: false
    });
  }

  
 
  renderHeader = ({navigation}) => {
      return (
        <View style={styles.headerContainer}>
          <View style={styles.backContainer}>
            <TouchableOpacity 
            //  onPress={()=> {navigation.goBack()}}
            >
              <Image style={styles.backIcon} source={require('../../assets/icons/refresh.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <SearchBar 
              placeholder="검색해봤자 아무것도 없지롱"
              lightTheme round editable={true}
              value={this.state.search}
              onChangeText={this.updateSearch}
              inputContainerStyle={styles.search}
              />
          </View>
        </View>
          
          
          
          ); 
  }; 
 
  updateSearch = search => {
        this.setState({ search }, () => {
            if ('' == search) {
                this.setState({
                    data: [...this.state.temp]
                });
                return;
            }
             
            this.state.data = this.state.temp.filter(function(item){
                return item.name.includes(search);
              }).map(function({id, name, email}){
                return {id, name, email};
            });
        });
  };
 
  render() {
    return (
      this.state.error != null ?
        <View style={{ flex: 1, flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}>
          <Text>{this.state.error}</Text>
          <Button onPress={
            () => {
              this.getData();
            }
          } title="Reload" />
        </View> : 
        <FlatList
            ListHeaderComponent={this.renderHeader}
            data={this.state.data}
            keyExtractor={item => item.email}
            renderItem={({ item }) => (
            
                <ListItem bottomDivider>
                {/* <Avatar source={{uri: item.avatar_url}} /> */}
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            
        )}
      />
    );
  }
}
 
export default SearchPage;

const styles = StyleSheet.create({
  headerContainer:{
    // backgroundColor:'lightblue',
    flex:1,
    flexDirection:'row'
  },
  backContainer:{
    width:'15%',
    justifyContent:'center',
    alignItems:'center'
  },
  backIcon:{
    width:30,
    height:30
  }, 
  searchContainer:{
    flex:1,
  //  backgroundColor:'lightyellow'
  },
  search:{
  },
})