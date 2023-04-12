import React from "react"
import { Text } from "react-native"
import { style} from './styles'
export interface ITitle {
   titleI: string
}
export function TitleSlider({titleI}: ITitle){
    return (
        <Text style={style.title} >{titleI}</Text>
        
    )
}