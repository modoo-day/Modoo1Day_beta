import React,{Component} from 'react';
import {View, Image, Text, ScrollView, FlatList, Dimensions,StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper'
const {width, height} = Dimensions.get('window');



    



class Body extends Component{


    /* flat리스트표 */
    constructor() {
        super();
        this.state = {
          query: null,
          dataSource: [],
          dataBackup: [],
        };
      }
    
      componentDidMount() {
        var data = [
          {
            name: 'The Ballad Of Songbirds And Snakes',
            author: 'Suzanne ',
            img: require('../../../assets/img/night.png'),
            description:
              'The Ballad of Songbirds and Snakes is an upcoming ',
          },
          {
            name: 'If It Bleeds',
            author: 'Stephen King',
            img: require('../../../assets/img/night.png'),
            description:
              'From #1 New York Times bestselling author',
          },
          {
            name: 'The Book of Longings: A Novel',
            author: 'Sue Monk Kidd',
            img: require('../../../assets/img/night.png'),
            description:
              'Named a Most Anticipated Book of 2020 by O,',
          },
          {
            name: 'Masked Prey',
            author: 'John Sandford',
            img: require('../../../assets/img/night.png'),
            description:
              'Lucas Davenport investigates a vitriolig author John Sandfor'
          },
          {
            name: 'The Kennedy Curse',
            author: 'James Patterson',
            img: require('../../../assets/img/night.png'),
            description:
              'd to take risks and excel, living by theis given,',
          },
          {
            name: 'Hidden Valley Road',
            author: 'Robert Kolker',
            img: require('../../../assets/img/night.png'),
            description:
              'dAmerican Family is a 2020 non-fiction .',
          },
        ];
    
        this.setState({
          dataBackup: data,
          dataSource: data,
        });
      }
    
      filterItem = event => {
        var query = event.nativeEvent.text;
        this.setState({
          query: query,
        });
        if (query == '') {
          this.setState({
            dataSource: this.state.dataBackup,
          });
        } else {
          var data = this.state.dataBackup;
          query = query.toLowerCase();
          data = data.filter(l => l.name.toLowerCase().match(query));
    
          this.setState({
            dataSource: data,
          });
        }
    };




    



    render(){
        return(
    
            <View>
                   
                <ScrollView>

                    {/* 광고 배너 */}
                    <View style={{height:150}}>
                    
                        <Swiper style={styles.wrapper} showsButtons={false}>
                            <View style={styles.slide1}>
                                <View style={{flexDirection:'row', backgroundColor:'pink'}}>

                                    <View style={{flexDirection:'row', flexWrap:'wrap', backgroundColor:'pink'}}>
                                                <Image source={require('../../../assets/img/night.png')} style={{width:420}}/>
                                    </View>     


                                    
                                </View>
                            </View>

                            <View style={styles.slide2}>
                                <Text style={styles.text}>Beautiful</Text>
                            </View>

                            <View style={styles.slide3}>
                                <Text style={styles.text}>And simple</Text>
                            </View>
                        </Swiper>

                
                    </View>

                
                    {/* 인기콘텐츠 */}
                    <View style={{marginTop:40,marginBottom:10,marginLeft:18}}>
                        <Text style={{fontFamily:'neodgm',fontSize:15}}>인기콘텐츠🔥</Text>
                    </View>
                        {/* 리스트 */}
                    <FlatList
                        horizontal={true}
                        style={{flex: 1}}

                        keyExtractor={(item) => item.id}
                        
                
                                    
                        data={this.state.dataSource}
                    
                    
                        renderItem={({item, index}) => {
                            return (
                            <View style={{width:105, marginLeft:20, marginTop: 15, alignItems:'center'}}>
                                <Image source={item.img} style={{height:73, width:73, marginBottom:15}}/>
                                <View>
                                    <Text  style={{fontWeight:'bold'}}>
                                        {item.name}
                                    </Text>
                                    <Text numberOfLines={4} >
                                        {item.description}
                                    </Text>
                                    <Text >{item.author}</Text>
                                </View>
                            </View>
                            );
                        }}
                    />
                



                    {/* 신규 콘텐츠 */}
                    <View style={{marginBottom:100}}>
                        <View style={{marginTop:40,marginBottom:10,marginLeft:18}}>
                            <Text style={{fontFamily:'neodgm',fontSize:15}}>신규콘텐츠✨</Text>
                        </View>

                        {/* 리스트 */}
                        <FlatList
                            horizontal={true}
                            style={{flex: 1}}
                            keyExtractor={(item) => item.id}
                            data={this.state.dataSource}
                        
                        
                            renderItem={({item, index}) => {
                                return (
                                <View style={{width:105, marginLeft:20, marginTop: 15, alignItems:'center'}}>
                                    <Image source={item.img} style={{height:73, width:73, marginBottom:15}}/>
                                    <View>
                                        <Text  style={{fontWeight:'bold'}}>
                                            {item.name}
                                        </Text>
                                        <Text numberOfLines={4} >
                                            {item.description}
                                        </Text>
                                        <Text >{item.author}</Text>
                                    </View>
                                </View>
                                );
                            }}
                        />
                    </View>
                
                </ScrollView>

                        
            </View>





        )
    }
}


export default Body;


const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })