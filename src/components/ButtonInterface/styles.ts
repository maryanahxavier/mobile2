import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    ButtonPrimary:{
        backgroundColor: colors.primary,
        borderRadius: 5,
        margin: 10,


    },
    ButtonSecundary:{
        backgroundColor: colors.secondary,
        borderRadius: 5,
        margin: 10,
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        padding: 10,
        color:colors.black
    }
    
    
    

    }
)