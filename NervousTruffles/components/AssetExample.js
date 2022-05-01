import * as React from 'react';
import {Text, View, StyleSheet, Button, Alert, Platform , Image } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import { useState } from 'react';

export default function AssetExample() {

  const [ cont, setCont ] = useState(0);
  const [ texto, setTexto ] = useState ("");

  const clicado = () =>{
    //Alert.alert("Hello World");
    setCont( panquecas => panquecas + 1);
    if(Platform.OS == 'ios' || Platform.OS == 'android'){
        if(cont > 5){
          Alert.alert("I feel good!");
          setCont(null);        
        }
    }
    else{
      if(cont > 5){
         alert("I feel good!");
      }
     
    }
  }
  
  return (

   <View style={styles.containerfluid}>
      <Text style={styles.center}>{cont}</Text>
      <Text style={styles.paragraphfluid}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>      
         <View style={styles.container}>
            <Text style={styles.paragraph}>
                Local files and assets can be imported by dragging and dropping them into the editor
            </Text>
            <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
          </View>
        <Button title="click-me" onPress={clicado} />        
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  containerfluid: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraphfluid: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
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
  center:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
});
