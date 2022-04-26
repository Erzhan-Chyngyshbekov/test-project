import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Tabs from '../Tabs/Tabs';

function OrderSettings() {
  return (
    <View isVisible={true} style={styles.orderSettings}>
      <View style={styles.handle}></View>
      <Tabs />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  orderSettings: {
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
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
});

export default OrderSettings;
