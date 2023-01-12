import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

import Capa from './assets/images/capa.png';
import Foto from './assets/images/foto.png';
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Capa} style={styles.cover} />
      <View style={styles.card}>
        <Image source={Foto} style={styles.fotoPerfil} />
        <Text style={styles.name}>Nome</Text>
        <Text style={styles.info}>Informações</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    flex: 0.65,
    marginTop: 0,
    marginBottom: 20
  },
  card: {
    padding: 0,
    flex: 1,
    alignItems: 'center',
  },
  fotoPerfil: {
    marginVertical: 20,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  name: {
    color: '#fcfcfc',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  info: {
    color: '#fcfcfc',
    fontSize: 18,
    marginHorizontal: 15,
  }


});
