import React from 'react';
import { Image, View, Text} from 'react-native';
import { IPage} from '../../../App';
import {
   ComponentLisMarker, ComponentButtonSlider, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI}: IPage){
    const slider2= require("../../assets/ana.png")
    const slider3= require("../../assets/image3.png")
    const slider4= require ("../../assets/aq.png")
    const sliderTexts = [
        { id: '1', text: 'Vestido Ana Pintanga'},
        { id: '2', text: 'Vestido Eliane Aurora '},
        { id: '3', text: 'Conjunto saia e cropped Mary Sea'},
    ]
    return (
    
            <>
           < View style={styles.panel} />
                        <ComponentTitleSlider  />
                        <FlatList
                        data={SlideTexts}
                        renderItem={({item}) =>
                    <ComponentListMarker key={item.id} textMarker={item.text} />

    }
    />  <View style={styles.ButtonSlider}>
        <ComponentButtonSlider texto='Ofertas'onPressI={() => setPageI(1)} />
        <ComponentButtonSlider texto='Lançamentos' onPressI={() => setPageI(2)} />
        <ComponentButtonSlider texto='Acessórios'onPressI={() => setPageI(3)} />
        <ComponentButtonSlider texto= 'Redes Sociais' onPressI={() => setPageI(4)} />
        </View>

                
    
            </ >
    
    
        
        );
    }