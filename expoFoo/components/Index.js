import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Cadastrar from './Cadastrar';
import CadastrarProduto from './CadastrarProduto';
import Header from './Header';
import Menu from './Menu';
import MeusObjetosTroca from './MeusObjetosTroca';
import Procurar from './Procurar';
import Register from './Register';
import SolicitacoesFeitas from './SolicitacoesFeitas';
import SolicitacoesRecebidas from './SolicitacoesRecebidas';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
   <View style={styles.container}>
      <View style={styles.box}>
       <Image style={styles.logo} source={require('../assets/logo.png')} />
       <Pressable style={styles.button1} onPress={() => navigation.navigate('Cadastrar')}><Text>Cadastrar</Text></Pressable>   
       <Pressable style={styles.button2} onPress={() => navigation.navigate('Register')}><Text>Entrar</Text></Pressable>  
      </View>       
    </View>
  );
}

export default function Index({navigation}){

  return(
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="" component={HomeScreen} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="SolicitacoesRecebidas" component={SolicitacoesRecebidas} />
        <Stack.Screen name="SolicitacoesFeitas" component={SolicitacoesFeitas} />
        <Stack.Screen name="CadastrarProduto" component={CadastrarProduto} />
        <Stack.Screen name="MeusObjetosTroca" component={MeusObjetosTroca} />
        <Stack.Screen name="Procurar" component={Procurar} />
        <Stack.Screen name="Header" component={Header} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#F2E5D5",    
    width: '100%',
    height: '100%',      
  },
  box:{
    display: 'flex',
    flexDirection: "col",
    justifyContents: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'

  },
  button1:{
      display: 'block',
      backgroundColor: '#8C5637',
      padding: '1em',
      marginTop: '2%',
      marginBottom: '2%',
      textAlign: 'center',
      color: 'white' ,
      fontFamily: 'Verdana'     

  },
  button2:{
      display: 'block',
      backgroundColor: '#BF8B5E',
      padding: '1em',
      marginTop: '2%',
      marginBottom: '2%',
      textAlign: 'center',
      color: 'white',
      fontFamily: 'Verdana'    
  },
  logo: {
    height: 128,
    width: 128, 
    marginLeft: 'auto',
    marginRight: 'auto',   
   
  },
});