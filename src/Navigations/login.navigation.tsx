import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import{SreenLogin} from "../screens"

const Stack = createStackNavigator();

export function LoginNavigation() {
  return (
    <Stack.Navigator>
        
      <Stack.Screen name="Login" component={SreenLogin} />
     
    </Stack.Navigator>
  );
}