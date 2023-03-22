import {TouchableOpacity} from 'react-native'
import { styles } from './styles'
export interface IBslider{
    onPressI: () => void
}

export function ButtonSlider({onPressI}: IBSlider){
    return( 
        <TouchableOpacity style={styles.text} onPress={onPressI} />
        
    )
}
