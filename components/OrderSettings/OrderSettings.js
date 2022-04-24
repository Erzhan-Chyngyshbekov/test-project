import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Tabs from '../Tabs/Tabs';

function OrderSettings() {
  return (
    <View isVisible={true} style={styles.orderSettings}>
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
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
  },
});

export default OrderSettings;
