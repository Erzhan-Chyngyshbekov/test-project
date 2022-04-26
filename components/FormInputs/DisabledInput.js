import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

function Disabled({label, value, handleTextChange, icon}) {
  const [isFocused, setIsFocudes] = useState(false);

  const handleFocus = () => setIsFocudes(true);
  const handleBlur = () => setIsFocudes(false);

  const labelStyle = {
    position: 'absolute',
    left: 10,
    top: !isFocused && !value ? 13 : 4,
    fontSize: !isFocused && !value ? 16 : 11,
    color: !isFocused ? '#B2BDC5' : '#4B595C',
    fontFamily: 'Ubuntu-Medium',
  };

  return (
    <View style={styles.labelInput_wrapper}>
      <View style={styles.icon}>{icon}</View>

      <View style={styles.labelInput}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          editable={false}
          value={value}
          placeholder={value}
          onChangeText={newText => handleTextChange(newText)}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          blurOnSubmit
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
  input: {
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: 'Ubuntu-Bold',
    color: '#4B595C',
    borderRadius: 16,
  },
});

export default Disabled;
