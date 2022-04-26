import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import BottomSheetDetailsInputModal from '../BottomSheetModals/BottomSheetDetailsInputModal';

function FormDetailsInput({label, value, handleTextChange, icon}) {
  const [isDetailsModalVisible, setDetailsModalVisible] = useState(false);

  const toggleDetailsModal = () =>
    setDetailsModalVisible(!isDetailsModalVisible);

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: !value ? 13 : 4,
    fontSize: !value ? 16 : 11,
    color: '#B2BDC5',
    fontFamily: 'Ubuntu-Medium',
  };

  return (
    <View style={styles.form_item}>
      <View style={styles.icon}>{icon}</View>

      <TouchableOpacity style={styles.labelInput} onPress={toggleDetailsModal}>
        <Text style={labelStyle}>{label}</Text>
        <Text style={styles.inputValue}>{value}</Text>
      </TouchableOpacity>

      <BottomSheetDetailsInputModal
        isDetailsModalVisible={isDetailsModalVisible}
        setDetailsModalVisible={setDetailsModalVisible}
        toggleDetailsModal={toggleDetailsModal}
        value={value}
        handleTextChange={handleTextChange}
        icon={icon}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  form_item: {
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
    paddingHorizontal: 10,
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  inputValue: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Ubuntu-Bold',
    color: '#4B595C',
  },
});

export default FormDetailsInput;
