import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View , Image, TextInput} from 'react-native';
import alien from './assets/alien.png'

export default function App() {
  return (
    <View style={styles.container}>

      {/*Uma View pode reagir a diversos eventos que possam acontcer com elas, abaixo a gente tem dois bem usados que é de quando o usuário clicar nele e quando ele tira o dedo dela, no código abaixo ele realiza reações diferentes a respeito de cada evento */}



      <View style={styles.styleView} onTouchStart={(event)=>{
        Alert.alert('Toque', 'Click init')
      }
      }
      onTouchEnd={(event)=>{
        Alert.alert('Toque', 'Click end')
      }}
      >
        <Text >Clique aqui</Text>
      </View>
      {/*Podemos deixar um texto selecionável, através dessa propriedade que o o Text tem. */}
      <Text selectable={true}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />



      {/*Utilizando imagens*/}
      <Image source={alien} />

      {/*TextInput -> Componente que é usado para recebermos textos e ele tem propiedades bem interessantes como o onChange e o keyBoardType */}
      <TextInput style={styles.input} onChange={(e)=>console.log( e.nativeEvent.text)} />
      {/*Podemos recuprar um valor que está sendo digitado através do onChange e pergar o que está acontecendo com ele. */}


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
  styleView:{
    backgroundColor: 'blue',
    color:'white',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20
  },
  input:{
    width: 150,
    height: 30,
    backgroundColor: 'red'
  }
});
