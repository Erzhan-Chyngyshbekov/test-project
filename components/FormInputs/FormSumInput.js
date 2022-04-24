import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import AddIcon from '../../assets/icons/AddIcon';
import BottomSheetSumInputModal from '../BottomSheetModals/BottomSheetSumInputModal';

function FormSumInput({label, value, handleTextChange, icon}) {
  const [isFocused, setIsFocudes] = useState(false);
  const [isSumModalVisible, setSumModalVisible] = useState(false);

  const toggleSumModal = () => setSumModalVisible(!isSumModalVisible);

  const handleFocus = () => setIsFocudes(true);
  const handleBlur = () => setIsFocudes(false);

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: !isFocused && !value ? 13 : 4,
    fontSize: !isFocused && !value ? 16 : 11,
    color: !isFocused ? '#B2BDC5' : '#4B595C',
    fontWeight: '500',
  };

  return (
    <View style={styles.labelInput_wrapper}>
      <View style={styles.icon}>{icon}</View>

      <View style={styles.labelInput}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          // editable={false}
          showSoftInputOnFocus={false}
          onPressIn={toggleSumModal}
          value={value}
          // placeholder={value}
          onChangeText={newText => handleTextChange(newText)}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          blurOnSubmit
        />
      </View>

      <BottomSheetSumInputModal
        isSumModalVisible={isSumModalVisible}
        setSumModalVisible={setSumModalVisible}
        toggleSumModal={toggleSumModal}
        value={value}
        handleTextChange={handleTextChange}
        icon={icon}
      />

      <TouchableOpacity style={styles.add_point}>
        <AddIcon />
        <Text style={styles.add_point_text}>Добавить точку</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  labelInput_wrapper: {
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
    width: '59%',
    height: 50,
    backgroundColor: '#fff',
    paddingTop: 5,
    fontSize: 16,
    fontWeight: '500',
    borderRadius: 16,
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B595C',
    borderRadius: 16,
  },
  add_point: {
    width: 94,
    height: 50,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  add_point_text: {
    width: 50,
    fontSize: 10,
  },
});

export default FormSumInput;
