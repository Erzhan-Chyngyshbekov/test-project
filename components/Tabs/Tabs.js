import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';

function Tabs() {
  const BagIcon = '../../assets/icons/Bag_icon.png';
  const ConvertIcon = '../../assets/icons/Convert_icon.png';
  const BoxIcon = '../../assets/icons/Box_icon.png';

  const options = [
    {id: 1, icon: require(BagIcon), title: 'Помощник покупок', isActive: false},
    {
      id: 2,
      icon: require(ConvertIcon),
      title: 'Просто курьер',
      isActive: false,
    },
    {id: 3, icon: require(BoxIcon), title: 'Доставщик заказов', isActive: true},
  ];

  return (
    <View style={styles.tabs}>
      {options.map(item => (
        <TouchableOpacity key={item.id} style={styles.tab}>
          <Image style={styles.img} source={item.icon} />
          <Text
            style={item.isActive ? styles.title_active : styles.title_inactive}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    // marginBottom: 20,
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    width: '31%',
    height: 69,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  title_inactive: {
    marginLeft: 5,
    fontSize: 10,
    fontFamily: 'Ubuntu-Bold',
    color: '#DEDEDE',
    width: 60,
  },
  title_active: {
    marginLeft: 5,
    fontSize: 10,
    fontFamily: 'Ubuntu-Bold',
    color: '#00D8F9',
    width: 60,
  },
  img: {
    width: 30,
    height: 30,
  },
});

export default Tabs;
