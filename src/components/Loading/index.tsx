import React from "react"
import LottieView from 'lottie-react-native'
import loading from '../../lottie/carregando.json'

export function Loading (){
    return <LottieView source={loading} autoPlay loop/>
}