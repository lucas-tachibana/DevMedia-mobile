import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import TelaInicial from './components/TelaInicial';
import TelaHospedagem from './components/TelaHospedagem';
import TelaPasseios from './components/TelaPasseios';
import TelaRestaurantes from './components/TelaRestaurantes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ TelaInicial }/>
        <Stack.Screen name="Hospedagem" component={ TelaHospedagem }/>
        <Stack.Screen name="Passeios" component={ TelaPasseios }/>
        <Stack.Screen name="Restaurantes" component={ TelaRestaurantes }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

