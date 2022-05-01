import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';

export default function DoaDoa(){

  const[ jsonSource, getJsonSource ] = useState( require("../assets/source.json"));

  return(

    <View style={styles.container}>
    <ScrollView>
       {
         jsonSource && jsonSource.map( (data, key) => {
            return(
              <View style={styles.film}>
              <Text style={styles.filmTitle} >{data.id}</Text>
              <Text style={styles.filmDescription} >{data.titulo}</Text>
               <Image source={{uri:data.imagem}}  style={styles.img} />
              </View>              
            );
         })
       }   
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  img:{
    width: 300,
    height: 200,
    backgroundColor: "black"
  },
  film:{
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 2
  },
  filmTitle:{
    fontWeight: "bold",
    fontSize: 15
  },
  filmDescription:{
    marginTop: 5,
    marginBottom: 10
  }
  
});
