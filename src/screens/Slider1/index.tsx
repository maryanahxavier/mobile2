import {FlatList} from 'react-native';
import {Ipage} from '../../App';

import {
    ComponetButtonSlider,ComponentTitleSlider
} from '../../components';
import {style} from './style';
export function Slider1({setPageI}:Ipage) {
    const slider1 = require("../../assets/mid.png")
    const lider1 = require("../../assets/duda.png")
    const Slider1 = require("../../assets/luana.png")
    const slider1Text = [
        {id: '1', text: 'Conjunto Mid Verão'},
        {id: '2', text: 'de  R$158,00 '},
        {id: '3', text: 'por R$100,00'},
        {id: '4', text: 'Vestido Duda Primavera'},
        {id: '5', text: 'de R$200,00'},
        {id: '6', text: 'por R$200,00'},
        {id: '7', text: 'Vestido Luana Atlântica'},
        {id: '8', text: 'de R$390,00'},
        {id: '9', text: 'por R$290,00'},
]
 return(
    <ImageBackground source= {slider1} style={style.container} >
        <View style={slider.panel}>
            <ComponentTitleSlider titleI= "MARY's BOTIQUE" />
            <FlatList
             data={slider1Texts}
             renderItem={({item}) =>
             <ComponentTitleSlider textMaker={item.text} />
 }
      />  </View>
      <View style={styles.ButtonSlider}>
      <ComponentTitleSlider texto='Ofertas'onPressI={() => setPageI(1)} />
      <ComponentTitleSlider texto='Lançamentos' onPressI={() => setPageI(2)} />
      <ComponentTitleSlider texto='Acessórios'onPressI={() => setPageI(3)} />
      <ComponentTitleSlider texto= 'Redes Sociais' onPressI={() => setPageI(4)} />
      </View>

    </ImageBackground>
    
 );

}