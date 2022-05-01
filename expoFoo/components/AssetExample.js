import * as React from 'react';
import Constants from 'expo-constants';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';

export default function AssetExample() {
  return (

 <View style={styles.containerFluid}>
      <Text style={styles.paragraphtwo}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>            
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Local files and assets can be imported by dragging and dropping them into the editor
          </Text>
          <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
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
   containerFluid: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraphtwo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
