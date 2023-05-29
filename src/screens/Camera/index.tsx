import { Camera, CameraCapturedPicture, CameraType,FaceDetectionResult } from 'expo-camera';
import React, { useRef, useState } from 'react';
import { Button, Text, Image, View, Alert } from 'react-native';
import { ComponentButtonInterface } from '../../components';
import { styles } from "./styles"
import * as MediaLibary from "expo-media-library"
import * as ImagePicker from "expo-image-picker"
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as FaceDetector from 'expo-face-detector'
import {BarCodeScanner,BarCodeScannerResult} from 'expo-barcode-scanner';


interface Iphoto {
  height: string
  uri: string
  width: string
}

export function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermissionCamera] = Camera.useCameraPermissions()
  const [permissionMedia, requestPermissionMidia] = MediaLibary.usePermissions()
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)
  const [permissionQrCode, requestPermissionQrCode] = BarCodeScanner.usePermissions();
  const [scanned, setScanned] = useState(false);
  const [face, setFace] = useState<FaceDetector.FaceFeature>()
  

  if (!permissionCamera) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionCamera.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Você precisa autorizar o acesso da câmera </Text>
        <Button onPress={requestPermissionCamera} title="conceder o acesso" />
      </View>
    );
  }

  if (!permissionMedia) {
    // Galeria permissions are still loading
    return <View />;
  }


  if (!permissionMedia.granted) {
    // Galeria permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Você precisa autorizar o acesso da Galeria </Text>
        <Button onPress={requestPermissionMidia} title="conceder o acesso" />
      </View>
    );
  }



  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  async function takePicture() {
    if (ref.current) {
      const picture = await ref.current.takePictureAsync()
      console.log()
      setPhoto(picture)
    }
  }
  async function savePhoto() {
    const asset = await MediaLibary.createAssetAsync(photo!.uri)
    MediaLibary.createAlbumAsync("Images", asset, false)
    Alert.alert("Imagem salva com sucesso")

  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    if (!result.canceled) {
      setPhoto(result.assets[0])
    }
  }
  function handleBarCodeScanned({type,data}: BarCodeScannerResult) {
    setScanned(true);
    alert(data);
  }
  function lernovamente(){
    setScanned(false)
  }
  return (

    <View style={styles.container}>
    <Camera style={styles.camera} type={type} ref={ref}
       onBarCodeScanned={scanned? undefined: handleBarCodeScanned}>
      <ComponentButtonInterface title='Virar câmera' type='primary' onPressI={toggleCameraType}/>
      
        <TouchableOpacity onPress={toggleCameraType} style={styles.button}>
    
        </TouchableOpacity>
      </Camera>

      <ComponentButtonInterface title='ler novamente' type= 'primary' onPressI={lernovamente} />
      <ComponentButtonInterface title='Tirar foto' type='secondary' onPressI={takePicture} />
      <ComponentButtonInterface title='Salvar Imagem' type='secondary' onPressI={savePhoto} />
      <ComponentButtonInterface title='abrir Imagem' type='secondary' onPressI={pickImage} />


      {photo && photo.uri && (
        <Image source={{ uri: photo.uri }} style={styles.img} />
      )}
    </View>
  );
}




