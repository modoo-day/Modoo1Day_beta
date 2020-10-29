// 1. focused border 색 변경
// 2. nicknickname invalid check
// 3. 계속하기 validcheck 이후 표시
// 4. 다음단계 마지막입니다
// 5. profile 눌렀을 때 갤러리 접근 (중요)
// 6. datepicker 좀더 생각해보기

/* #region Library List */
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
import Button from 'apsl-react-native-button';
import {RFPercentage} from 'react-native-responsive-fontsize';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
/* #endregion */

const Preference = () => {
  /* #region useState */
  /* Modal */
  const [modalVisible, setModalVisible] = useState(false);
  const [datePickerVisible, setdatePickerVisible] = useState(false);

  /* Profile Image */
  const [img, setImg] = useState(require('../../../assets/icons/profile.png')); // profile image
  /* Photo Option for imageLoad() */
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

  /* NickName */
  const [name, setName] = useState('닉네임'); // 이름 아님 닉네임임
  const [nameColor, setNameColor] = useState('lightgray');
  const [nameAlert, setNameAlert] = useState('닉네임을 입력하세요!');
  const [nameAlertColor, setNameAlertColor] = useState('blue');

  /* Gender */
  const [gender, setGender] = useState('성별');
  const [genderColor, setGenderColor] = useState('lightgray');
  const [genderAlert, setGenderAlert] = useState('성별을 선택하세요!');
  const [genderAlertColor, setGenderAlertColor] = useState('blue');

  /* BirthDate */
  const [date, setDate] = useState('생년월일');
  const [dateColor, setDateColor] = useState('lightgray');
  const [dateAlert, setDateAlert] = useState('생년월일을 선택하세요!');
  const [dateAlertColor, setDateAlertColor] = useState('blue');

  /* Next */
  const [next, setNext] = useState('계속하기');
  /* #endregion */

  /* #region 로컬 갤러리에서 사진 가져오기 */
  function imageLoad() {
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
  /* #endregion */

  /* #region 생년월일 형식 생성 */
  function setDatetoString(selected) {
    var birthDate = selected.toLocaleDateString(); // date format to string format
    var mm = birthDate.substring(0, 2);
    var dd = birthDate.substring(3, 5);
    var yy = birthDate.substring(6, 8);
    console.log('20' + yy + '년' + mm + '월' + dd + '일');
    setDate('20' + yy + '년 ' + mm + '월 ' + dd + '일'); // mm/dd/yy -> yy년 mm월 dd일
  }
  /* #endregion */

  /* #region XML */
  return (
    <View style={styles.centeredView}>
      <Modal></Modal>
      
// TODO: 생년월일 모달캘린더 화면 만들어야하는데  selected State 만ㄷ르어야항
      {/* Date Picker Modal */}
      <DateTimePickerModal>
        isVisible={datePickerVisible}
        mode="date" onConfirm=
        {(selected) => {
          setDatetoString(selected);
          setdatePickerVisible(false);
        }}
        onCancel={() => setDatePickerVisibility(false)}
      </DateTimePickerModal>

      {/* 프로필 이미지 */}
      <TouchableOpacity onPress={() => imageLoad()}>
        <Image source={img} style={styles.Image} />
      </TouchableOpacity>

      {/* 닉네임 */}
      <View style={styles.ViewButton}>
        <TouchableOpacity style={{...styles.Button, borderColor: nameColor}}>
          <TextInput
            style={{...styles.Text, color: nameColor}}
            placeholder={'닉네임'}
            placeholderTextColor={'lightgray'}
          />
        </TouchableOpacity>
        <Text style={{...styles.Alert, color: nameAlertColor}}>
          {nameAlert}
        </Text>
      </View>

      {/* 성별 */}
      <View style={styles.ViewButton}>
        <TouchableOpacity style={{...styles.Button, borderColor: genderColor}}>
          <Text style={{...styles.Text, color: nameColor}}>{gender}</Text>
        </TouchableOpacity>
        <Text style={{...styles.Alert, color: genderAlertColor}}>
          {genderAlert}
        </Text>
      </View>

      {/* 생년월일 */}
      <View style={styles.ViewButton}>
        <TouchableOpacity style={{...styles.Button, borderColor: dateColor}}>
          <Text style={{...styles.Text, color: nameColor}}>{date}</Text>
        </TouchableOpacity>
        <Text style={{...styles.Alert, color: dateAlertColor}}>
          {dateAlert}
        </Text>
      </View>

      {/* 계속하기 */}
      <Text style={styles.Next}>{next}</Text>
    </View>
  );
  /* #endregion */
};

/* #region StyleSheet */
const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
  },
  Image: {
    width: PixelRatio.getPixelSizeForLayoutSize(35),
    height: PixelRatio.getPixelSizeForLayoutSize(35),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(50),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(20),
  },
  ViewButton: {
    alignItems: 'center',
    marginTop: '5%',
  },
  Button: {
    borderWidth: 1,
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(30),
    width: PixelRatio.getPixelSizeForLayoutSize(60),
    height: PixelRatio.getPixelSizeForLayoutSize(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(1),
  },
  Text: {
    fontFamily: 'neodgm',
    width: '100%',
    textAlign: 'center',
  },
  Alert: {
    fontFamily: 'neodgm',
  },
  Next: {
    fontFamily: 'neodgm',
    fontSize: RFPercentage(5),
    marginVertical: PixelRatio.getPixelSizeForLayoutSize(10),
  },
});
/* #endregion */

export default Preference;