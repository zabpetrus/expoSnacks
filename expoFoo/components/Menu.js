import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Header from './Header';

export default function Menu({navigation}){

  return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <ScrollView style={styles.row}>

          <Text style={styles.title}>Menu</Text> 

           <Pressable style={styles.button1} onPress={() => navigation.navigate('CadastrarProduto')} >
              <Text>Cadastrar Produto</Text>                  
           </Pressable> 

            <Pressable style={styles.button1} onPress={() => navigation.navigate('MeusObjetosTroca')} >
             <Text>Meus objetos de troca</Text>                   
            </Pressable>  

            <Pressable style={styles.button1} onPress={() => navigation.navigate('Procurar')} >
              <Text>Procurar objetos</Text>                   
            </Pressable>  

            <Pressable style={styles.button1} onPress={() => navigation.navigate('SolicitacoesRecebidas')} >
              <Text>Solicita&ccedil;&otilde;es recebidas</Text>                   
            </Pressable>  

            <Pressable style={styles.button1} onPress={() => navigation.navigate('SolicitacoesFeitas')} >
              <Text>Solicita&ccedil;&otilde;es Feitas</Text>                   
            </Pressable>   
        </ScrollView>
            
      </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f3f3f3',
    width: '100%',
    height: '100%',
  },
  row:{
      padding: '2em',
      height: '100%'
  },
  title:{
    fontFamily: 'Tahoma',
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center'
  },
   button1:{
    marginTop: '2em',
    padding: '1.5em',
    textAlign: 'center',
    backgroundColor: '#8C5637',
    color: 'white',
   fontFamily: 'Verdana'
  }

});