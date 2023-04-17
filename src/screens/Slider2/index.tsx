import React from 'react';
import { Image, View, Text, FlatList } from 'react-native';
import { IPage } from '../../../App';
import { ComponentButtonSlider, ComponentListMarker, ComponentTitlleSLider } from '../../components';
import { styles } from './styles';

export function Slider2({ setPageI }: IPage) {
  const slider2 = require("../../assets/ana.png");
  const slider3 = require("../../assets/image3.png");
  const slider4 = require("../../assets/aq.png");

  const sliderTexts = [
    { id: '1', text: 'Vestido Ana Pintanga' },
    { id: '2', text: 'Vestido Eliane Aurora' },
    { id: '3', text: 'Conjunto saia e cropped Mary Sea' },
  ];

  return (
    <> 
       <View style={styles.container}>
      <View style={styles.panel}>
       <ComponentListMarker titleI="MARY´BOUTIQUE" />
        <ComponentButtonSlider />
        
        <FlatList
          data={sliderTexts}
          renderItem={({ item }) =>
            <ComponentListMarker key={item.id} textMarker={item.text} image={0} />
          }
        />
          </View>
        <View style={styles.buttonSlider}>
          <ComponentButtonSlider  onPressI={() => setPageI(1)} />
          <ComponentButtonSlider  onPressI={() => setPageI(2)} />
          <ComponentButtonSlider  onPressI={() => setPageI(3)} />
          <ComponentButtonSlider  onPressI={() => setPageI(4)} />
          <ComponentButtonSlider onPressI={() => setPageI(5)} />
        </View>
      </View>
    </>
  );
}