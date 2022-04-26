import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import AddPhoto from '../AddPhoto/AddPhoto';

function BottomSheetDetailsInputModal({
  isDetailsModalVisible,
  setDetailsModalVisible,
  toggleDetailsModal,
  value,
  handleTextChange,
}) {
  const inputRef = useRef();
  // setTimeout(() => inputRef.current.focus(), 100);

  const [isFocused, setIsFocudes] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleFocus = () => setIsFocudes(true);
  const handleBlur = () => setIsFocudes(false);
  const handleSubmit = () => {
    toggleDetailsModal();
    handleTextChange(inputValue);
  };

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: 4,
    fontSize: !isFocused ? 14 : 11,
    color: '#B2BDC5',
    fontFamily: 'Ubuntu-Medium',
  };

  return (
    <Modal
      style={styles.modal}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      animationInTiming={500}
      animationOutTiming={500}
      isVisible={isDetailsModalVisible}
      onSwipeComplete={() => setDetailsModalVisible(false)}
      swipeDirection="down">
      <View style={styles.bottomSheet}>
        <View style={styles.handle}></View>

        <Text style={styles.title}>Как получить заказ?</Text>

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.back_icon}
            onPress={toggleDetailsModal}>
            <Image
              style={{width: 11, height: 11}}
              source={require('../../assets/icons/Back_icon.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitBtnStyle}
            onPress={handleSubmit}>
            <Text
              style={{
                color: '#00D8F9',
                fontFamily: 'Ubuntu-Medium',
                fontSize: 16,
              }}>
              Готово
            </Text>
          </TouchableOpacity>
        </View>

        <LinearGradient
          style={styles.info}
          start={{x: 0.0, y: 0.0}}
          end={{x: 1.0, y: 0.0}}
          colors={['#00B0F0', '#00D8F9']}>
          <Text style={styles.infoTextStyle}>
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
              autoFocus={true}
              ref={inputRef}
              onLayout={() => inputRef.current.focus()}
              value={inputValue}
              onChangeText={newText => setInputValue(newText)}
              style={styles.input}
              onFocus={handleFocus}
              onBlur={handleBlur}
              blurOnSubmit
            />
          </View>
          {inputValue ? (
            <TouchableOpacity onPress={() => setInputValue('')}>
              <Image
                style={styles.clear_icon}
                source={require('../../assets/icons/Clear_icon.png')}
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
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  handle: {
    position: 'absolute',
    top: 0,
    width: 61,
    height: 4,
    backgroundColor: '#4B595C',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  header: {
    width: '100%',
    // padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back_icon: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  submitBtnStyle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  title: {
    position: 'absolute',
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Ubuntu-Bold',
    color: '#4B595C',
  },

  info: {
    width: '100%',
    height: 36,
  },
  infoTextStyle: {
    paddingHorizontal: 15,
    fontFamily: 'Ubuntu-Medium',
    color: '#fff',
  },

  labelInput_wrapper: {
    margin: 15,
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
    fontSize: 16,
    borderRadius: 16,
  },
  input: {
    height: '100%',
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: 'Ubuntu-Bold',
    color: '#4B595C',
    borderRadius: 16,
    paddingBottom: 70,
    // backgroundColor: '#dedede',
    // opacity: 0.6,
  },
  clear_icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 20,
    height: 20,
    margin: 5,
  },
});

export default BottomSheetDetailsInputModal;
