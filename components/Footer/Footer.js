import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Footer({onPress}) {
  return (
    <View style={styles.footer}>
      <LinearGradient
        style={{borderRadius: 16}}
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 1.0}}
        colors={['#00B0F0', '#00D8F9']}>
        <TouchableOpacity onPress={onPress} style={styles.btn}>
          <Text style={styles.btn_text}>Далее</Text>
          <Text style={styles.btn_text}>от 345.00 ₽</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 80,
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  btn: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
  },
  btn_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Footer;
