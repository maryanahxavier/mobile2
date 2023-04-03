import React from 'react';
import { FlatList, Image, ImageBackground, View } from 'react-native';
import { Ipage } from '../..App';
import { ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider } from '../../components';
import { styles } from './style';

export function Slider1({ setPageI }: Ipage) {
  const slider5 = require("../../assets/mid.png");
  const slider6 = require ("../../assets/duda.pgn")
  const slider9 = require ("../../assets/luana")
  const sliderData = [
    { id: '1', text: 'Conjunto Mid Verão' },
    { id: '2', text: 'de R$158,00' },
    { id: '3', text: 'por R$100,00' },
    { id: '4', text: 'Vestido Duda Primavera' },
    { id: '5', text: 'de R$200,00' },
    { id: '6', text: 'por R$200,00' },
    { id: '7', text: 'Vestido Luana Atlântica' },
    { id: '8', text: 'de R$390,00' },
    { id: '9', text: 'por R$290,00' },
  ];

  return (
    <ImageBackground source={image} style={styles.background}>
      <View style={styles.panel}>
        <ComponentTitleSlider />
        <Image source={slider5} style={styles.container} />
        <FlatList
          keyExtractor={(item) => item.id}
          data={sliderData}
          renderItem={({ item }) =>
            <ComponentListMarker textMarker={item.text} />
          }
        />
      </View>
      <View style={styles.ButtonSlider}>
        <ComponentButtonSlider texto='Ofertas' onPress={() => setPageI(1)} />
        <ComponentButtonSlider texto='Lançamentos' onPress={() => setPageI(2)} />
        <ComponentButtonSlider texto='Acessórios' onPress={() => setPageI(3)} />
        <ComponentButtonSlider texto='Redes Sociais' onPress={() => setPageI(4)} />
        <ComponentButtonSlider texto='Contato' onPress={() => setPageI(5)} />
      </View>
    </ImageBackground>
  );
}
