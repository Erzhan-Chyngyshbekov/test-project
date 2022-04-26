import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import ActionSheet from 'react-native-actionsheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import PhotoIcon from '../../assets/icons/PhotoIcon';

function AddPhoto() {
  const [photos, setPhotos] = useState([]);

  let optionArray = ['Галерея фото', 'Сделать фото', 'Отменить'];
  let actionSheet = useRef();

  const showActionSheet = () => {
    actionSheet.current.show();
  };

  const options = {
    title: 'Выбери',
    storageOptions: {
      skipBackup: true,
      path: 'images',
      mediaType: 'photo',
    },
    includeBase64: false,
    selectionLimit: 5 - photos.length,
  };

  const openGallery = () => {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image Picker error: ' + response.errorMessage);
      } else {
        // console.log(response.assets);
        response.assets.forEach(item => {
          // const source = item.uri;
          const source = {uri: item.uri, id: item.fileName};
          console.log(source);
          setPhotos([...photos, source]);
        });
      }
    });
  };

  const openCamera = () => {
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image Picker error: ' + response.errorMessage);
      } else {
        const source = response.assets[0].uri;
        setPhotos([...photos, source]);
      }
    });
  };

  const deletePhoto = id => {
    setPhotos(
      photos.filter(photo => {
        photo.id !== id;
        console.log(photo);
      }),
    );
  };

  return (
    <View style={styles.photos_wrapper}>
      {photos.map(photo => (
        <View key={photo.id}>
          <Image source={{uri: photo.uri}} style={styles.added_pic} />
          <TouchableOpacity
            style={styles.delete_icon}
            onPress={() => {
              deletePhoto(photo.id);
            }}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../../assets/icons/Delete_white_icon.png')}
            />
          </TouchableOpacity>
        </View>
      ))}

      {photos.length < 5 ? (
        <TouchableOpacity onPress={showActionSheet}>
          <LinearGradient
            style={styles.photo_icon}
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            colors={['#00B0F0', '#00D8F9']}>
            <PhotoIcon />
          </LinearGradient>
        </TouchableOpacity>
      ) : null}

      <ActionSheet
        ref={actionSheet}
        title={'Выбери'}
        options={optionArray}
        cancelButtonIndex={2}
        onPress={index => {
          if (index === 0) {
            openGallery();
          } else if (index === 1) {
            openCamera();
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  photos_wrapper: {
    width: '100%',
    height: '20%',
    paddingHorizontal: 15,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  photo_icon: {
    width: 50,
    height: 50,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
  },
  added_pic: {
    width: 50,
    height: 50,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    backgroundColor: '#000',
    opacity: 0.5,
  },
  delete_icon: {
    position: 'absolute',
    top: 0,
    right: 10,
    width: 15,
    height: 15,
    margin: 3,
  },
});

export default AddPhoto;
