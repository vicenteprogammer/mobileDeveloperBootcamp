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

      <Button title='Greeting' onPress={greet}/>
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
