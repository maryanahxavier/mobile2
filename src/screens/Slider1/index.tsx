import React from 'react';
import { FlatList, View, StyleSheet} from 'react-native';
import { IPage} from '../../../App';
import { ComponentButtonSlider, ComponentListMarker,ComponentTitlleSLider } from '../../components';
import { styles } from './styles';

export function Slider1({ setPageI }: IPage) {
  const image1 = require("../../assets/mid.png");
  const image2 = require ("../../assets/duda.png");
  const image3 = require ("../../assets/luana.png");

  const slide1Texts= [
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
    <>
    <View style={styles.container}>
      <View style={styles.panel}>
        <ComponentTitlleSLider titleI="MARY´BOUTIQUE"   />
        <FlatList
          data={slide1Texts}
          renderItem={({ item }) => (
            <ComponentListMarker key={item.id} textMarker={item.text} image={item.img} />
            
          )}
        />
      </View>
      <View style={styles.buttonSlider}>
        <ComponentButtonSlider  onPressI={() => setPageI(1)} />
        <ComponentButtonSlider  onPressI={() => setPageI(2)} />
        <ComponentButtonSlider  onPressI={() => setPageI(3)} />
        <ComponentButtonSlider  onPressI={() => setPageI(4)} />
        <ComponentButtonSlider  onPressI={() => setPageI(5)} />
      </View>
      </View>
    </>
  );
}
