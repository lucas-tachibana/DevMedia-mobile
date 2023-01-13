import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import TelaInicial from './components/TelaInicial';
import Titulo from './components/Titulo';

export default function App() {
  return (
    <View>
      <Titulo/>
      <TelaInicial/>
    </View>
  );
}
