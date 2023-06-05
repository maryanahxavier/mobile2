import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SecreenPerfil,SreenCamera,SreenLocation} from "../screens"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { colors } from '../styles/colors';
import { Ionicons, AntDesign, Entypo} from '@expo/vector-icons';
type TabParamList = {
  Perfil: undefined
  Camera: undefined
  Location: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}
 export function TabNavigation() {
       const Tab = createBottomTabNavigator<TabParamList>();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
        backgroundColor: Colors.primary
        },
        headerTintColor: colors.white,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white
      }}
    >
      <Tab.Screen name="Perfil" component={SecreenPerfil} 
         options={{
           tabBarIcon: () => (
           <Ionicons name='person' color={colors.white} size={24} />
           ) 
         }}
      />
      <Tab.Screen name="Camera" component={SreenCamera}
      options={{
        tabBarIcon: () => (
          <Ionicons name='person' color={colors.white} size={24} />
          ) 
        }}
      />

      <Tab.Screen name='Location' component={SreenLocation}
      options={{
        tabBarIcon: () => (
          <Entypo name="location" size={24} color="black" />
        )
      }}
      />


      
    </Tab.Navigator>
  
  )
}