import {TouchableOpacity, View} from 'react-native'
import { styles } from './styles'
export interface IBslider{
    onPressI: () => void
}

export function ButtonSlider({onPressI,texto}: IBSlider){
    return( 
        <View style={styles.Text} onPress={onPressI} >
          <Text>{texto}</Text>
        ?</View>
    )
}
