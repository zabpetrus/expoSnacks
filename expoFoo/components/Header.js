import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Header({navigation}){

  return (
      <View style={styles.container} >
      
        <Text style={styles.presentation}>Ol&aacute; Gen&eacute;sio</Text>

        <Pressable onPress={() => navigation.navigate('Menu')} >
            <Image style={styles.buttonhome} source={require('../assets/home.png')} />         
        </Pressable>       
      </View>
  );

}

const styles = StyleSheet.create({
  container:{
    padding: '2em',
    backgroundColor: 'white',
    boxShaddow: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  presentation:{
    textAlign: "left"
  },
  buttonhome:{
    height: 25,
    width: 25,
  }
});