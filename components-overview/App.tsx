import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

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
  }
});
