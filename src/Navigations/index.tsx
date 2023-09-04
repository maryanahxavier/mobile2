import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {LoginNavigation} from "./login.navigation"
import {useAuth} from "../hooks/auth"
import {TabNavigation} from "./tab.navigation"
import User from '../services/data/User';

export  function Navigation() {
  const {user} = useAuth()
  return (
    <NavigationContainer>
      <LoginNavigation/>
      {user?.token ? <TabNavigation /> : <LoginNavigation /> }

    </NavigationContainer>
  );
}