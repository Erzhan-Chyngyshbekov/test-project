import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

function BottomSheetSumInputModal({
  isSumModalVisible,
  setSumModalVisible,
  toggleSumModal,
  value,
  handleTextChange,
  icon,
}) {
  const inputRef = useRef();
  // setTimeout(() => inputRef.current.focus(), 100);

  const [isFocused, setIsFocudes] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleFocus = () => setIsFocudes(true);
  const handleBlur = () => setIsFocudes(false);
  const handleSubmit = () => {
    toggleSumModal();
    handleTextChange(inputValue);
  };

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: !isFocused && !inputValue ? 13 : 4,
    fontSize: !isFocused && !inputValue ? 16 : 11,
    color: inputValue > 6000 ? '#00D8F9' : '#DEDEDE',
    fontFamily: 'Ubuntu-Medium',
  };

  return (
    <Modal
      style={styles.modal}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      animationInTiming={500}
      animationOutTiming={500}
      isVisible={isSumModalVisible}
      onSwipeComplete={() => setSumModalVisible(false)}
      swipeDirection="down">
      <View style={styles.bottomSheet}>
        <View style={styles.handle}></View>

        <View style={styles.header}>
          <TouchableOpacity style={styles.back_icon} onPress={toggleSumModal}>
            <Image
              style={{width: 11, height: 11}}
              source={require('../../assets/icons/Back_icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitBtnStyle}
            onPress={inputValue && inputValue < 6000 ? handleSubmit : null}>
            <Text
              style={{
                color: !inputValue || inputValue > 6000 ? '#E8E8E8' : '#00D8F9',
                fontFamily: 'Ubuntu-Medium',
                fontSize: 16,
              }}>
              Готово
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.labelInput_wrapper}>
          <View style={styles.icon}>{icon}</View>

          <View style={styles.labelInput}>
            <Text style={labelStyle}>
              {!isFocused
                ? 'Укажи сумму'
                : inputValue > 6000
                ? 'Не более 6 000 ₽ в одном заказе'
                : 'Точная сумма оплаты'}
            </Text>
            <TextInput
              keyboardType="numeric"
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
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: 'center',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  back_icon: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  submitBtnStyle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  labelInput_wrapper: {
    marginHorizontal: 15,
    marginBottom: 20,
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
    width: '85%',
    height: 50,
    backgroundColor: '#fff',
    paddingTop: 5,
    fontSize: 16,
    borderRadius: 16,
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: 'Ubuntu-Bold',
    color: '#4B595C',
    borderRadius: 16,
  },
  clear_icon: {
    position: 'absolute',
    right: 0,
    top: 10,
    width: 20,
    height: 20,
    margin: 5,
  },
});

export default BottomSheetSumInputModal;
