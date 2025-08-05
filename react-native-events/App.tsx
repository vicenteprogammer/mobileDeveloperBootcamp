import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const greet = () =>{
    Alert.alert('Olá, usúario')
  }
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 30}} >Open up App.tsx to start working on your app!</Text>
      {/*onPress é um dos principais eventos que compõem vários componentes de react native, muito usado em botões e alguns textos específicos, nesse evento podemos passar funções e paramêtros para a função que será executado, assim como no javascript */}

      {/** onPressIn é o evento que é executado antrs do evento de pressionar, geralmente usado para fazer alguma verificção antes do usúario clicar, levando em conta que isso acontec em milisegundos. */}

      {/*onPressOut é o evento que é executado por último assim quando o usúario deixa de pressiona ele é e executado */}

      <Text onPressOut={()=>{'Sou o último a ser executado'}} onPress={greet} onPressIn={()=> console.log('Eu executo primeiro')}> Press Here</Text>
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
