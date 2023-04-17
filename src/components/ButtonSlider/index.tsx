import {TouchableOpacity, View} from 'react-native'
import { style } from '../TitleSlider/styles'
import { styles } from './styles'
export interface IBslider{
    onPressI: () => void
}

export function ButtonSlider({onPressI}: IBslider){
    return( 
        <TouchableOpacity style={styles.ball} onPress={onPressI} />
      
    );
}
