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

const Preference = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [name, setName] = useState('');
  const [gender, setGender] = useState('성별을 선택하세요');
  const [date, setDate] = useState('생년월일');

  const [finish, setfinish] = useState('계속하기');

  function setDatetoString(selected) {
    var birthDate = selected.toLocaleDateString();
    var mm = birthDate.substring(0, 2);
    var dd = birthDate.substring(3, 5);
    var yy = birthDate.substring(6, 8);
    console.log('20' + yy + '년' + mm + '월' + dd + '일');
    setDate('20' + yy + '년 ' + mm + '월 ' + dd + '일');
  }

  return (
    <View style={styles.centeredView}>
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

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={(selected) => {
          setDatetoString(selected);
          setDatePickerVisibility(false);
        }}
        onCancel={() => setDatePickerVisibility(false)}
      />

      <Image
        source={require('../../../assets/icons/profile.png')}
        style={styles.Image}
      />
      <TouchableOpacity style={styles.Button}>
        <TextInput
          style={{...styles.Text, ...styles.TextInput}}
          placeholder={'이름을 입력하세요'}
          onChangeText={(text) => setName(text)}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.Button}>
        <Text style={styles.Text}>{gender}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setDatePickerVisibility(true)}
        style={styles.Button}>
        <Text style={styles.Text}>{date}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert("3가지 넣었는지 체크해주고, 다음 페이지로 navigate하면 끝, 아 그리고 name gender date params로 넘겨줘야함")}
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
    backgroundColor: 'gray',
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
    textAlign: 'center',
  },
});

export default Preference;
