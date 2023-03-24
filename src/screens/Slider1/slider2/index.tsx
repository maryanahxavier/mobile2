import React from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { IPage} from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI}: IPage){
    const slider2= require("../../assets/ana.png")
    const slider2= require("../../assets/image3.png")
    const slider2= require ("../../assets/aq.png")
    const slide1Texts = [
        { id: '1', text: 'Vestido Ana Pintanga'},
        { id: '2', text: 'Vestido Eliane Aurora '},
        { id: '3', text: 'Conjunto saia e cropped Mary Sea '},
    ]
    return (
        <ImageBackground source={slider1} style={styles.container} >
            <View style={styles.panel}>
              <ComponentTitleSlider titleI='EM BREVE!' />
                <FlatList
                data={slide1Texts}
                renderItem={({item})=> 
                   <ComponentListMarker key={item.id} textMarker={item.text} />
               }
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider tetx= 'Ofertas' onPressI={() => setPageI(1)}  />
                <ComponentButtonSlider text= 'Lançamentos' onPressI={() => setPageI(2)}  />
                <ComponentButtonSlider text= 'Acessório' onPressI={() => setPageI(3)}  />
                <ComponentButtonSlider text= 'Redes Sociais' onPressI={() => setPageI(4)}  />
            </View>
            </ImageBackground>
    );                         
            }