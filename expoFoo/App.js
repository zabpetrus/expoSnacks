import { StyleSheet, View } from 'react-native';
import Index from './components/Index';
import Cadastrar from './components/Cadastrar';
import * as React from 'react';

export default function App() {
  return (
    <View style={styles.container}>      
    <Cadastrar />
    </View>      
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    boxSizing: 'content-box'
  }
});


