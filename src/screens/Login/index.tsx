import React from "react";
import {View, KeyboardAvoidingView,Text,
TextInput} from "react-native"
import { style } from "../../components/TitleSlider/styles";
import (styles) from "./styles"
import { MaterialIcons } from "@expo/vector-icons";

export function Login(){
    return(
        <View style={style.container}>
            <KeyboardAvoidingView>
                <Text style={style.title} >Login</Text>
                <View style={style.formRow}
                </KeyboardAvoidingView>
                </View>
    )
}