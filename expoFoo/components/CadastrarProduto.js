import * as React from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Header';

export default function CadastrarProduto({navigation}){

  
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
      <View >
        <Header />
        <View style={styles.container}>

        <Text style={styles.title}>Cadastrar Produto</Text> 
        
          <View style={styles.formControl} >
            <Text  style={styles.label}>Nome do item</Text>
            <TextInput 
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder= "Nome"
            />              
          </View>

          <View style={styles.formControl} >
            <Text style={styles.label}>Descri&ccedil;&atilde;o</Text>
            <TextInput 
              style={styles.textarea}
              onChangeText={onChangeText}
              value={text}
              placeholder= "Nome"
            />              
          </View>

          <View style={styles.botoes}>
              <Pressable style={styles.button1} onPress={() => navigation.navigate('Cadastrar')}><Text>Escolher do Dispositivo</Text></Pressable>   
              <Pressable style={styles.button1} onPress={() => navigation.navigate('Cadastrar')}><Text>Tirar uma foto</Text></Pressable>            
          </View>

          <View style={styles.muttons2}>
          <Button onPress={() => navigation.navigate('Index')}  title="Salvar" color="#BF8B5E" />
          </View>

          <View style={styles.muttons2}>
           <Button onPress={() => navigation.navigate('Index')}  title="Cancelar" color="#8C5637" />
          </View>
          

         

        </View>
        
      </View>
  );

}

const styles = StyleSheet.create({
  container:{
    padding: '1em'
  },
   input: {
    marginTop: '10%',    
    padding: 10,
    backgroundColor: 'white',
   
  },
  label:{
    lineHeight: '1em',
    marginBottom: "-1em"
  },
  formControl:{
    paddingTop: '1em'
  },
  textarea:{
    marginTop: '10%',    
    padding: 10,
    backgroundColor: 'white',
    height: 100
  },
  title:{
    fontSize: '1.5em',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: '1.2em',
    marginBottom: '1.2em'
  },
  botoes:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20
  },
  button1:{
    width: '45%',
    height: '8em',
    padding: 10,        
    display: 'block',
    backgroundColor: '#8C5637',
    color: 'white'
  },
  muttons2:{
    marginTop: '1em',
  }

});