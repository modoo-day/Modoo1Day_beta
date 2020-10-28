import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';


const ReviewWritePage = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Text>
                    <Text style={styles.title}>물 마시기</Text>
                    <Text style={styles.topText1}>의</Text>
                </Text>
                <Text style={styles.topText2}>경험이 어땠나요?</Text>
            </View>
            <View style={styles.mid}>
                <AirbnbRating
                    count={5}
                    reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                    defaultRating={5}
                    size={40}
                />
                <Text style={styles.ratingText}>별점을 선택해주세요!</Text>
            </View>
            <View style={styles.bottom}>
            </View>
        </View>
    )
}
export default ReviewWritePage;

const styles = StyleSheet.create({
    container:{

    },
    top:{

    },
    title:{

    },
    topText1:{

    },
    topText2:{

    },
    mid:{

    },
    ratingText:{

    },
    bottom:{

    },
})