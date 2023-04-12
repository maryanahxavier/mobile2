import React from 'react';
import { View, Text, KeyboardAvoidingView, TextInput} from "react-native";
import { styles } from './styles';
import {MaterialIcons, Entypo, Ionicons} from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface } from "../../components";

export function Cadastrar() {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title} >Cadastrar</Text>
                <View style={styles.formRow} >
                <Ionicons name="person-outline" size={24} color="black" />
                    <TextInput
                    placeholder='nome'
                    placeholderTextColor={colors.black}
                    style={styles.input} 
                    />   
                </View>
                <View style={styles.formRow} >
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                    placeholder='E-mail'
                    placeholderTextColor={colors.primary}
                    keyboardType="email-address"
                    autoCapitalize='none'
                    style={styles.input} 
                    />   
                </View>
                <View style={styles.formRow}>
                <Entypo name="key" style={styles.icon} />
                    <TextInput
                    placeholder='Senha'
                    placeholderTextColor={colors.black}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    style={styles.input} 
                    />
                </View>
                <ComponentButtonInterface title='Salvar' type="primary" onPressI={() =>{console.log("cadastrar")}} />
                <ComponentButtonInterface title='Voltar' type="primary" onPressI={() =>{console.log("login")}} />
            </KeyboardAvoidingView> 
        </View>
    )
}