import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
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
  const [isFocused, setIsFocudes] = useState(false);

  const handleFocus = () => setIsFocudes(true);
  const handleBlur = () => setIsFocudes(false);

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: !isFocused && !value ? 13 : 4,
    fontSize: !isFocused && !value ? 16 : 11,
    color: value > 6000 ? '#00D8F9' : !isFocused ? '#B2BDC5' : '#4B595C',
    fontWeight: '500',
  };

  return (
    <Modal
      // avoidKeyboard={true}
      style={styles.modal}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      animationInTiming={500}
      animationOutTiming={500}
      isVisible={isSumModalVisible}
      onSwipeComplete={() => setSumModalVisible(false)}
      swipeDirection="down">
      <View style={styles.bottomSheet}>
        <TouchableWithoutFeedback
          onPress={value < 6000 ? toggleSumModal : null}>
          <View style={styles.header}>
            <Image
              style={styles.back_icon}
              source={require('../../assets/icons/Back_icon.png')}
            />
            <Text style={{color: value > 6000 ? '#E8E8E8' : '#00D8F9'}}>
              Готово
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.labelInput_wrapper}>
          <View style={styles.icon}>{icon}</View>

          <View style={styles.labelInput}>
            <Text style={labelStyle}>
              {value > 6000
                ? 'Не более 6 000 ₽ в одном заказе'
                : 'Сумма оплаты'}
            </Text>
            <TextInput
              keyboardType="numeric"
              autoFocus={true}
              value={value}
              // placeholder={value}
              onChangeText={newText => handleTextChange(newText)}
              style={{
                height: 50,
                paddingHorizontal: 10,
                fontSize: 16,
                fontWeight: 'bold',
                color: '#4B595C',
                borderRadius: 16,
              }}
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
    padding: 15,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  header: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  back_icon: {
    width: 20,
    height: 20,
  },

  labelInput_wrapper: {
    marginBottom: 5,
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
    fontWeight: '500',
    borderRadius: 16,
  },
  delete_icon: {
    position: 'absolute',
    right: 0,
    top: 10,
    width: 20,
    height: 20,
    margin: 5,
  },
});

export default BottomSheetSumInputModal;
