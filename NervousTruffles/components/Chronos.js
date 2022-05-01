import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function Chronos({navigation})
{
      return(
        <View style={styles.container}>          
          <View style={styles.contents}>

            <Text style={styles.title}>Cronos</Text>
            <TouchableOpacity style={styles.button}  onPress={()=>{navigation.navigate('BaraBara')}} >
            <Text style={styles.buttontitle} >Funcionalidade 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}  onPress={()=>{navigation.navigate('DoaDoa')}} >
            <Text style={styles.buttontitle} >Json</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}  onPress={()=>{navigation.navigate('GeroGero')}}>
            <Text style={styles.buttontitle} >Rel&oacute;gio</Text>
            </TouchableOpacity>
          </View>       
        </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title:{
    fontWeight:"bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom:  20
  },
  contents:{
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight:"auto"
  },
  button:{
    backgroundColor: "crimson",
    padding: 20,
    width: 200,    
    marginBottom: 10
  },
  center:{
    textAlign: "center"
  },
  buttontitle:{
    color: '#ffffff',
    textAlign: "center"
  }
  
});