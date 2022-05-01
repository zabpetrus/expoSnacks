import * as React from 'react';
import { View, Image, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chronos from './Chronos';
import GeroGero from './GeroGero';
import BaraBara from './BaraBara';
import DoaDoa from './DoaDoa';

//Definição da variavel global
const Stack = createNativeStackNavigator()

function FirstScreen({navigation}){
    return(
    <View style={styles.container}>
      <TouchableOpacity onPress={ () => navigation.navigate('Pagina')}>
        <Image source={{ uri: "https://th.bing.com/th/id/OIP.ZLkfgF0s_RVjbLBaqtX0awAAAA?pid=ImgDet&rs=1"}} style={styles.logo} />
      </TouchableOpacity> 
    </View>
  );
}


export default function Welcome({navigation}){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Pagina" component={Chronos} options={{ headerShown: false }} />
        <Stack.Screen name="GeroGero" component={GeroGero} options={{ headerShown: true }} />
        <Stack.Screen name="DoaDoa" component={DoaDoa} options={{ headerShown: true }} />
        <Stack.Screen name="BaraBara" component={BaraBara} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "black"
  },
  logo:{
    width: 90,
    height: 90,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 60
  }
})