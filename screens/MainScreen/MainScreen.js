import React from 'react';
import {Text, View, Image, StyleSheet, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../.././assets/images/Logo-img';
import OrderSettings from '../../components/OrderSettings/OrderSettings';

function MainScreen() {
  return (
    <LinearGradient
      style={styles.layout}
      start={{x: 0.0, y: 0.0}}
      end={{x: 1.0, y: 0.0}}
      colors={['#00B0F0', '#00D8F9']}>
      <View style={styles.hero}>
        <Logo />
      </View>
      <OrderSettings />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hero: {
    flex: 1,
    // height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
