import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function BoxRed(){
   return(
    <View style={{backgroundColor:'red'}}></View>
   )
   
  }


export default function App() {

  //Aprendendo como funciona os stilos no React Native...

  /*No react native, por padrão o modelo de posicionamento de itens na tela é o flexbox, diferente da web que a gente escolhe qual modelo a gente vai usar */

  /* O flebox funciona de maneira que cada elemeneto é um container 'pai' e outros elemntos que podem vir está dentro deles é um elemento filho (child) o flexbox funciona ness padrão.*/

  /*Algumas propiedades importantes:
  Flex -> Indica o quanto aquele elemnto vai ocupar na leta, se o flex:1 ele vai ocupar 100% do que ele consengue, muito usado para criar layouts.

  flexDirection -> Defini como os elementos vão ser dipostos na tela, horizontalmente, verticalmente, entre outros tipos, por padrão no react native o flex direction é Column.
   */




  return (
    
    <View style={styles.container}>
      <BoxRed/>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
