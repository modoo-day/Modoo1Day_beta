// 1. focused border 색 변경
// 2. nicknickname invalid check
// 3. 계속하기 validcheck 이후 표시
// 4. 다음단계 마지막입니다
// 5. profile 눌렀을 때 갤러리 접근 (중요)
// 6. datepicker 좀더 생각해보기

import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  PixelRatio,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';

const Preference = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [img, setImg] = useState(require('../../../assets/icons/profile.png'));
  const photoOptions = {
    title: 'Select Profile',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    mediaType: 'photo',
    maxWidth: 3000,
    maxHeight: 3000,
  };

  const [nickname, setNickname] = useState('닉네임');
  const [nicknameAlert, setNicknameAlert] = useState("닉네임을 입력해주세요!");

  const [gender, setGender] = useState('성별을 선택하세요');
  const [date, setDate] = useState('생년월일');

  const [finish, setfinish] = useState('계속하기');
  const [isValid, setIsValid] = useState(false);
  const [border, setBorder] = useState('lightgray');

  const USR_TB = firestore().collection('USR_TB');

  /* date format to string format : mm/dd/yy -> yy년 mm월 dd일 */
  function setDatetoString(selected) {
    var birthDate = selected.toLocaleDateString();
    var mm = birthDate.substring(0, 2);
    var dd = birthDate.substring(3, 5);
    var yy = birthDate.substring(6, 8);
    console.log('20' + yy + '년' + mm + '월' + dd + '일');
    setDate('20' + yy + '년 ' + mm + '월 ' + dd + '일');
  }

  /* Image load from Local Gallery Storage */
  function loadImg() {
    ImagePicker.launchImageLibrary(photoOptions, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        console.log(source);
        setImg(source);
      }
    });
  }

  function nameCheck(text) {
    const nameReg = /[A-Za-z가-힣]{2,10}/; // 영문한글혼용 공백X 2-10글자
    if (nameReg.test(text)) {
      setBorder('black');
      setNicknameAlert('사용 가능한 닉네임 입니다!');
      setNickname(text);
    } else {
      setBorder('lightgray');
      setNicknameAlert('사용할 수 없는 닉네임 입니다!');
      setNickname("");
    }
  }

  function inspectNickname(text) {
    USR_TB.where('nickname', '==', text)
      .get()
      .then((snapshot) => {
        console.log('inspectation start');
        if (snapshot.empty) {
          // DB에 유저 정보 없으면
          console.log(text, ': DB empty');
        }
        snapshot.forEach((doc) => {
          // DB에 유저 정보 있으면
          console.log(text, 'DB filled');
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.centeredView}>
      {/* Gender Select Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('이미 제출되었습니다.');
        }}>
        <View style={styles.modalcenterView}>
          <View style={styles.modalView}>
            <Text style={{...styles.titleText, ...styles.Text}}>
              성별을 선택해주세요!
            </Text>
            <View style={styles.modalButtonView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setGender('남자');
                }}
                style={styles.modalButton}>
                <Text style={styles.Text}>남자</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setGender('여자');
                }}
                style={styles.modalButton}>
                <Text style={styles.Text}>여자</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Date Picker Modal */}
      <DateTimePickerModal>
        isVisible={isDatePickerVisible}
        mode="date" onConfirm=
        {(selected) => {
          setDatetoString(selected);
          setDatePickerVisibility(false);
        }}
        onCancel={() => setDatePickerVisibility(false)}
      </DateTimePickerModal>

      {/* Profile Image */}
      <TouchableOpacity onPress={() => loadImg()}>
        <Image source={img} style={styles.Image} />
      </TouchableOpacity>
      
      {/* nickname */}
      <TouchableOpacity style={{...styles.Button, borderColor: border}}>
        <TextInput
          style={{...styles.Text, ...styles.TextInput}}
          placeholder={'닉네임'}
          onChangeText={(text) => inspectNickname(text)}
        />
      </TouchableOpacity>

      <Text style={styles.Text}>{nicknameAlert}</Text>

      {/* Gender */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.Button}>
        <Text style={styles.Text}>{gender}</Text>
      </TouchableOpacity>

      <Text style={styles.Text}>{nicknameAlert}</Text>

      {/* Date */}
      <TouchableOpacity
        onPress={() => setDatePickerVisibility(true)}
        style={styles.Button}>
        <Text style={styles.Text}>{date}</Text>
      </TouchableOpacity>

      <Text style={styles.Text}>{nicknameAlert}</Text>

      {/* Keep Going */}
      <TouchableOpacity
        onPress={() =>
          alert(
            '3가지 넣었는지 체크해주고, 다음 페이지로 navigate하면 끝, 아 그리고 nickname gender date params로 넘겨줘야함',
          )
        }
        color={'black'}>
        <Text style={styles.Text}>{finish}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    marginTop: RFPercentage(20),
  },
  modalcenterView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButtonView: {
    flexDirection: 'row',
  },
  modalButton: {
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: '4%',
    alignItems: 'center',
  },
  titleText: {
    marginBottom: '8%',
  },
  Image: {
    width: PixelRatio.getPixelSizeForLayoutSize(30),
    height: PixelRatio.getPixelSizeForLayoutSize(30),
    marginBottom: '5%',
    borderWidth: 1,
    borderRadius: 50,
  },
  Button: {
    width: RFPercentage(35),
    height: RFPercentage(7),
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: RFPercentage(1),
  },
  Text: {
    fontFamily: 'neodgm',
    fontSize: RFPercentage(2.5),
    padding: '3%',
    textAlign: 'center',
  },
  TextInput: {
    width: RFPercentage(30),
  },
});

export default Preference;
