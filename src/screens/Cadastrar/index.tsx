import React, { useEffect, useState, } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, Alert, } from "react-native";
import { apiUSer } from '../../services/data';
import { styles } from './styles';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface, ComponentLoading } from "../../components";
import { LoginTypes } from '../../Navigations/login.navigation';
import { IRegister } from '../../services/data/User';
import { AxiosError } from 'axios';
export interface IErrorApi {
    errors: {
        rules: string
        field: string
        message: string

    }[]
}

export function Cadastrar({ navigation }: LoginTypes) {
    const [data, setData] = useState<IRegister>()
    const [isLoadin, setIsLoading] = useState(true)
    async function handleRegister() {
        try {
            setIsLoading(true)
            if (data?.name && data?.email && data?.password) {
                const response = await apiUSer.register(data)
                Alert.alert(`${response.data.name} cadastrado!`)
                navigation.navigate('Login')
            } else {
                Alert.alert("Preencha todos os campos!")
            }
        } catch (error) {
            const err = error as AxiosError
            const errData = err.response?.data as IErrorApi
            let message = ""
            if (errData) {
                for (const iterator of errData.errors) {
                    message = `${message} ${iterator.message} \n`
                }
            }
        } finally {
            setIsLoading(false)
        }
    }
    function handleChange(item: IRegister) {
        setData({ ...data, ...item })
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])

    return (
        <>
            {isLoadin ? (
                <ComponentLoading />
            ) : (
                <View style={styles.container}>
                    <KeyboardAvoidingView>
                        <Text style={styles.title} >Cadastrar</Text>
                        <View style={styles.formRow} >
                            <Ionicons name="person-outline" size={24} color={colors.black} />
                            <TextInput
                                placeholder='nome'
                                onChangeText={(i) => handleChange({ name: i })}
                                placeholderTextColor={colors.black}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.formRow} >
                            <MaterialIcons name="email" style={styles.icon} />
                            <TextInput
                                placeholder='E-mail'
                                onChangeText={(i) => handleChange({ email: i })}
                                placeholderTextColor={colors.black}
                                keyboardType="email-address"
                                autoCapitalize='none'
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.formRow}>
                            <Entypo name="key" style={styles.icon} />
                            <TextInput
                                placeholder='Senha'
                                onChangeText={(i) => handleChange({ password: i })}
                                placeholderTextColor={colors.black}
                                secureTextEntry={true}
                                autoCapitalize='none'
                                style={styles.input}
                            />
                        </View>
                        <ComponentButtonInterface title='Salvar' type="primary" onPressI={handleRegister} />
                        <ComponentButtonInterface title='Voltar' type="primary" onPressI={() => { navigation.navigate("Login") }} />
                    </KeyboardAvoidingView>
                </View>

            )}
        </>
    );
}