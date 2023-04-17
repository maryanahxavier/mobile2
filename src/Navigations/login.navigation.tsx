import React from 'react';
import { createStackNavigator,StackNavigationProp } from '@react-navigation/stack';
import {ScreenLogin,ScreenCadastrar} from "../screens"
type LoginStackParamList = {
  Login:undefined
  Cadastrar:undefined
};
type LoginScreenNavigation = StackNavigationProp<LoginStackParamList, 'Login'>
export type Logintypes = {
  navigation:LoginScreenNavigation
}

const Stack = createStackNavigator();

export function LoginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />s
    </Stack.Navigator>
  )
}
