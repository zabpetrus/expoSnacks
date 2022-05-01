import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hawaii from './Hawaii';

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
  return (
   <View style={styles.container}>
    <View style={styles.row}>
      <Image style={styles.logo} source={require('../assets/lista.png')} />
      <Text style={styles.paragraph}>Bem-Vindo</Text>
           <Pressable style={styles.button} onPress={() => navigation.navigate('Hawaii') }>
           <Text style={styles.buttonText}>Come&ccedil;ar</Text>
           </Pressable> 
      </View>  
    </View>
  );
}

export default function Inicio({navigation}){

  return(
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Hawaii" component={Hawaii} />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
    height: '100%'    
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }, 
  button:{
    padding: 30,
    backgroundColor: 'crimson',    
  },
  buttonText:{
    textAlign: 'center',
    color: 'white'
  },
  row:{
    marginTop: 'auto',
    marginBottom: 'auto'
  }
});