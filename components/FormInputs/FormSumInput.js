import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import AddIcon from '../../assets/icons/AddIcon';
import BottomSheetSumInputModal from '../BottomSheetModals/BottomSheetSumInputModal';

function FormSumInput({label, value, handleTextChange, icon}) {
  // const [isFocused, setIsFocudes] = useState(false);
  const [isSumModalVisible, setSumModalVisible] = useState(false);

  const toggleSumModal = () => setSumModalVisible(!isSumModalVisible);

  // const handleFocus = () => setIsFocudes(true);
  // const handleBlur = () => setIsFocudes(false);

  const _animatedIsFocused = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(_animatedIsFocused, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  let labelStyle = {
    position: 'absolute',
    left: 10,
    top: !value ? 13 : 4,
    // top: _animatedIsFocused.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [13, 4],
    // }),
    fontSize: !value ? 16 : 11,
    // fontSize: _animatedIsFocused.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [16, 11],
    // }),
    fontFamily: 'Ubuntu-Medium',
    color: '#B2BDC5',
  };

  return (
    <View style={styles.labelInput_wrapper}>
      <View style={styles.icon}>{icon}</View>

      <TouchableOpacity style={styles.labelInput} onPress={toggleSumModal}>
        <Text style={labelStyle}>{label}</Text>
        <Text style={styles.inputValue}>{value}</Text>
      </TouchableOpacity>

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
    fontFamily: 'Ubuntu-Medium',
    color: '#B2BDC5',
  },
});

export default FormSumInput;
