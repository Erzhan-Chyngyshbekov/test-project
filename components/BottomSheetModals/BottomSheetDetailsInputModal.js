import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import AddPhoto from '../AddPhoto/AddPhoto';

function BottomSheetDetailsInputModal({
  isDetailsModalVisible,
  toggleDetailsModal,
  value,
  handleTextChange,
}) {
  const [isFocused, setIsFocudes] = useState(false);

  const handleFocus = () => setIsFocudes(true);

  const handleBlur = () => setIsFocudes(false);

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: 4,
    fontSize: !isFocused ? 14 : 11,
    color: '#B2BDC5',
    fontWeight: '500',
  };

  return (
    <Modal
      style={styles.modal}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      animationInTiming={500}
      animationOutTiming={500}
      isVisible={isDetailsModalVisible}>
      <View style={styles.bottomSheet}>
        <TouchableWithoutFeedback onPress={toggleDetailsModal}>
          <View style={styles.header}>
            <Image
              style={styles.back_icon}
              source={require('../../assets/icons/Back_icon.png')}
            />
            <Text style={styles.title}>Как получить заказ?</Text>
            <Text style={{color: '#00D8F9'}}>Готово</Text>
          </View>
        </TouchableWithoutFeedback>

        <LinearGradient
          style={styles.info}
          start={{x: 0.0, y: 0.0}}
          end={{x: 1.0, y: 0.0}}
          colors={['#00B0F0', '#00D8F9']}>
          <Text
            style={{paddingHorizontal: 15, fontWeight: '500', color: '#fff'}}>
            Контакты курьера придут по СМС. Можно не указывать сейчас и сообщить
            ему детали позже.
          </Text>
        </LinearGradient>

        <View style={styles.labelInput_wrapper}>
          <View style={styles.labelInput}>
            <Text style={labelStyle}>
              {isFocused
                ? 'Не более 1200 символов'
                : 'Напиши здесь детали (необязательно)'}
            </Text>
            <TextInput
              value={value}
              onChangeText={newText => handleTextChange(newText)}
              style={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              blurOnSubmit
            />
          </View>
          {value ? (
            <TouchableOpacity onPress={() => handleTextChange('')}>
              <Image
                style={styles.delete_icon}
                source={require('../../assets/icons/Delete_icon.png')}
              />
            </TouchableOpacity>
          ) : null}
        </View>

        <AddPhoto />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomSheet: {
    // padding: 15,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  header: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  back_icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B595C',
  },

  info: {
    height: 36,
  },

  labelInput_wrapper: {
    margin: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  labelInput: {
    width: '100%',
    height: 122,
    backgroundColor: '#fff',
    paddingTop: 5,
    fontSize: 16,
    fontWeight: '500',
    borderRadius: 16,
  },
  input: {
    height: '100%',
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B595C',
    borderRadius: 16,
  },
  delete_icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 20,
    height: 20,
    margin: 5,
  },
});

export default BottomSheetDetailsInputModal;
