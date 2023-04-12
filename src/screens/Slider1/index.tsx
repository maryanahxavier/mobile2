import React from 'react';
import { FlatList, View, StyleSheet} from 'react-native';
import { IPage} from '../../../App';
import { ComponentButtonSlider, ComponentListMarker,ComponentTitlleSLider } from '../../components';
import { styles } from './styles';

export function Slider1({ setPageI }: IPage) {
  const image1 = require("../../assets/mid.png");
  const image2 = require ("../../assets/duda.png");
  const image3 = require ("../../assets/luana.png");

  const sliderTexts= [
    { id: '1', text: 'Conjunto Mid Verão', img:image1 },
    { id: '2', text: 'de R$158,00' },
    { id: '3', text: 'por R$100,00' },
    { id: '4', text: 'Vestido Duda Primavera',img:image2},
    { id: '5', text: 'de R$200,00' },
    { id: '6', text: 'por R$200,00' },
    { id: '7', text: 'Vestido Luana Atlântica',img:image3 },
    { id: '8', text: 'de R$390,00' },
    { id: '9', text: 'por R$290,00' },
  ];

  return (
    



      <View style={styles.buttonSlider}>
        <ComponentButtonSlider texto='Ofertas' onPress={() => setPageI(1)} />
        <ComponentButtonSlider texto='Lançamentos' onPress={() => setPageI(2)} />
        <ComponentButtonSlider texto='Acessórios' onPress={() => setPageI(3)} />
        <ComponentButtonSlider texto='Redes Sociais' onPress={() => setPageI(4)} />
        <ComponentButtonSlider texto='Contato' onPress={() => setPageI(5)} />
      </View>
  
  );
}
