import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import * as React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Cadastrar({navigation}){

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  let [fontsLoaded] = useFonts({ Inter_900Black, });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
      <SafeAreaView style={{height: '100%'}} >
        <ScrollView style={styles.container}>
          <View style={styles.row}>
              <View style={styles.rowA}>
                  <View style={styles.box}>
                      <Text style={styles.title}>Cadastrar</Text> 

                      <View style={styles.formControl} >                      
                        <Text  style={styles.label}>Nome</Text>
                        <TextInput 
                          style={styles.input}
                          onChangeText={onChangeText}
                          value={text}
                          placeholder= "Nome"
                        />              
                      </View>

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
                    <Text  style={styles.label}>Telefone</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Telefone celular"
                        keyboardType="numeric"
                      />
                    </View>

                    <View style={styles.formControl} >
                      <Text  style={styles.label}>Senha</Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={onChangeNumber}
                          value={number}
                          placeholder="Senha"
                          keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.formControl} >
                      <Text  style={styles.label}>Confirma&ccedil;&atilde;o de senha</Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={onChangeNumber}
                          value={number}
                          placeholder="Repetir senha"
                          keyboardType="numeric"
                        />
                    </View>
                  </View>     
                  
                         

              </View>

              <View style={styles.rowB}>
                 <View style={styles.box2} >
                 
                 
                    <View style={styles.formControl} >
                      <Text  style={styles.label}>Endere&ccedil;o</Text>
                      <TextInput 
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder= "Rua Fulano de Tal, 36"
                      />              
                    </View>

                    <View style={styles.formControl} >
                      <Text  style={styles.label}>Bairro</Text>
                      <TextInput 
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder= "Jardim Alvorada"
                      />              
                    </View>

                    <View style={styles.formControl} >
                      <Text  style={styles.label}>Cidade</Text>
                      <TextInput 
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder= "Cidade"
                      />              
                    </View>

                    <Pressable style={styles.button1} onPress={() => navigation.navigate('Menu')} >
                      <Text>Cadastrar</Text>                   
                    </Pressable>  
                 
                 
                 </View>        

              </View>
         
          </View>  
        </ScrollView>
      </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#BF8B5E",      
    paddingTop: '30%',
    paddingBottom: '30%',
    paddingLeft: '5%',
    paddingRight: '5%',          
  },
  row:{
    backgroundColor: '#F2E5D5',
  },
  rowA:{      
    width: '100%',    
  },
  rowB:{
    backgroundColor: '#F2E5D5',
    width: '100%',    
  },
  title:{
    fontSize: '2.2em',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  box:{
    marginLeft: 10,
    marginRight: 10,
    marginTop: 'auto',
    marginBottom: 10, 
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  box2:{
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,  
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
  button1:{
    marginTop: '2em',
    padding: '1.5em',
    textAlign: 'center',
    backgroundColor: '#8C5637',
    color: 'white',
   fontFamily: 'Inter_900Black'
  }

});