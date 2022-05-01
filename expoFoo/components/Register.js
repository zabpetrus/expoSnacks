import * as React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Register({navigation}){

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Login</Text> 
               <View style={styles.formControl} >
                      <Text  style={styles.label}>Email</Text>
                      <TextInput 
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder= "Email"
                      />              
              </View>

              <View style={styles.formControl} >
                      <Text style={styles.label}>Senha</Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={onChangeNumber}
                          value={number}
                          placeholder="Senha"
                          keyboardType="numeric"
                        />
              </View>

               <Pressable style={styles.button1} onPress={() => navigation.navigate('Menu')} >
                      <Text>Cadastrar</Text>                  
               </Pressable>  
   
        
        </View>


        
      </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor: '#BF8B5E'
  },
  title:{
    fontFamily: 'Tahoma',
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center'
  },
  box:{    
    marginLeft: '1em',
    marginRight: '1em',
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: '#F2E5D5',
    paddingTop: '4em',
    paddingBottom: '4em',
    paddingLeft: '1em',
    paddingRight: '1em',
  },
  formControl:{
    paddingTop: '1em'
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
   button1:{
    marginTop: '2em',
    padding: '1.5em',
    textAlign: 'center',
    backgroundColor: '#8C5637',
    color: 'white',
   fontFamily: 'Inter_900Black'
  }

});