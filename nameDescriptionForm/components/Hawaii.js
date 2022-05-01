import { View, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Platform, Alert } from 'react-native';
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

//Criando uma lista vazia que será populada com os valores dos campos
const initialList = [];

//Função que recebe as ações
const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: state.list.concat({ name: action.name, id: action.id, description: action.description }),
      };
    default:
      throw new Error();
  }
};

//Função que tem como argumento o nome das propriedades e os métodos que modificam estas propriedades
const AddItem = ({ name, description, onChangeName, onChangeDescription, onAdd }) => (
  <SafeAreaView>
          <TextInput
            style={styles.input}          
            placeholder="Nome" 
            onChange={onChangeName}  
            value={name}        
          /> 

          <TextInput
            style={styles.input}          
            placeholder="Descricao" 
            onChange={onChangeDescription}  
            value={description}        
          />         

          <TouchableOpacity style={styles.button} onPress={onAdd}>
          <Text style={styles.center}>Adicionar</Text>
          </TouchableOpacity>

    </SafeAreaView>
);


const List = ({ list }) => (
  <View>
      {list.map((item) => (
        <View style={styles.box}>
        <Text key={item.id}>{item.id}</Text>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        </View>
      ))}
  </View>
);


//Esta é a função principal
export default function Hawaii(){


 const [list, dispatchList] = React.useReducer( listReducer, initialList );
 const [name, setName] = React.useState('');
 const [description, setDescription] = React.useState('');

  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });

  function handleChangeName(event) {   
    setName(event.target.value);
  }

   function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  // Função que adiciona os itens no final da lista e forma o objeto json a ser inserido no final
  function handleAdd() { 

    //Adiciona se os campos estiverem preenchidos
    if((name == '') || (description == '')){
      //Verificando a plataforma corrente para fazer o alerta correspondente
      if(Platform.OS == 'antroid' || Platform.OS == 'ios'){
          Alert.alert("Os campos devem ser preenchidos!")
      }else{
         alert("Os campos devem ser preenchidos!");
      }
     
    }
    else{
      dispatchListData({ type: 'ADD_ITEM', name, id: uuidv4(), description });
      setName('');
      setDescription('');
    }   
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Complete a lista!</Text>
      <View style={styles.form}>
      
      <AddItem
        name={name}
        description={description}
        onChangeName={handleChangeName}
        onChangeDescription={handleChangeDescription}
        onAdd={handleAdd}
      />  
      
      
      </View>
       
      <List list={listData.list} />
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  backgroundColor: '#f3f3f3',
  height: '100%'
},
title:{
  textAlign: 'center',
  fontSize: 23,
  marginTop: 15
},
form:{
  backgroundColor: '#E9E9E9',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  marginTop: 20,
},
input:{
    height: 40,   
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 5
},
center:{
  textAlign: 'center'
},
button:{
  backgroundColor: 'crimson',
  marginTop: 5,
  padding: 10
},
box:{
  backgroundColor: 'grey',
  margin: 5,
  padding: 10
}
});