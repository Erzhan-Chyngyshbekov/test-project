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
    includeBase64: true,
    selectionLimit: 5,
  };

  const openGallery = () => {
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image Picker error: ' + response.errorMessage);
      } else {
        // const source = response.assets[0].uri;
        response.assets.forEach(item => {
          const source = item.uri;
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
        photo !== photos[id];
      }),
    );
  };

  return (
    <View style={styles.photos_wrapper}>
      {photos.map((photo, photoId) => (
        <View key={photoId}>
          <Image source={{uri: photo}} style={styles.photo_icon} />
          <TouchableOpacity
            style={styles.delete_icon}
            onPress={() => {
              deletePhoto(photoId);
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/icons/Delete_icon.png')}
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
    margin: 15,
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
  delete_icon: {
    position: 'absolute',
    top: 0,
    right: 10,
    width: 20,
    height: 20,
  },
});

export default AddPhoto;
