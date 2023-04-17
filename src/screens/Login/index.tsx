import React from 'react';
import { View, Text, KeyboardAvoidingView, TextInput} from "react-native";
import { styles } from './style';
import {MaterialIcons, Entypo} from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface } from "../../components";
import { Logintypes } from '../../Navigations/login.navigation';

export function Login({navigation}: Logintypes) {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title} >Login</Text>
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
                    style={styles.input} />



                </View>
                <ComponentButtonInterface title='Entrar' type="primary" onPressI={() =>{console.log("login")}} />
                <ComponentButtonInterface title='Cadastrar' type="primary" onPressI={() =>{navigation.navigate("Cadastrar")}} />
            </KeyboardAvoidingView> 
        </View>
    )
}