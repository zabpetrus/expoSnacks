import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Cadastrar from './Cadastrar';
import Menu from './Menu';
import Procurar from './Procurar';
import Index from './Index';


export default function Navigator(props){

  const Stack = createStackNavigator();

  return(
     <NavigationContainer>     
          <Stack.Navigator>
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Procurar" component={Procurar} />
            <Stack.Screen name="Cadastrar" component={Cadastrar} />
          </Stack.Navigator>
      </NavigationContainer> 
  );

}

