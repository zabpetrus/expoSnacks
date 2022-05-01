import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';


export default function Field() {

//const stockData = require('../assets/stock.json');

const [stockData]  = useState(require('../assets/stock.json'));

const [company, setCompany] = useState('');
const [ticker, setTicker] = useState('');
const [stockPrice, setstockPrice] = useState('');
const [timeElapsed, settimeElapsed] = useState('');
const [myobject, setMyObject] = useState(null);


const addme = () => {
    
    var temp = { 'company' : company, 'ticker': ticker, 'stockPrice' : stockPrice, 'timeElapsed' : timeElapsed };

    stockData.push(temp);
    try{
      setCompany('').setTicker('').setstockPrice('').settimeElapsed('');  
    }catch(Exception){
       return;

    }
   
    setMyObject(myobject);  
    
}


  return (
    <View style={styles.container}>
      <View style={styles.sabres}>
        <TextInput placeholder={'company'} style={styles.logo} onChangeText={(text) => setCompany(text)}  />

        <TextInput placeholder={'ticker'} style={styles.logo} onChangeText={(text) => setTicker(text)} />

        <TextInput placeholder={'stockPrice'} style={styles.logo} onChangeText={(text) => setstockPrice(text)} />

        <TextInput placeholder={'timeElapsed'} style={styles.logo} onChangeText={(text) => settimeElapsed(text)} />

        <Button title="Add-me" onPress={addme} />
      </View>
      
      <Text>{myobject}</Text>

      <View>
       {
         stockData.map( (item) => (
           <View style={styles.sabres}>
           <Text>{item.company}</Text>
           <Text>{item.ticker}</Text>
           <Text>{item.stockPrice}</Text>
           <Text>{item.timeElapsed}</Text>
           </View>
         ))
       }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  sabres: {
   borderBottomWidth: 2,
   paddingBottom: 10
  },
  logo: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10
  }
});
