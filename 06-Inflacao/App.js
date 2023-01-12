import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import Inflacao from './components/Inflacao';
import Salario from './components/Salario';
import SalarioInflacao from './components/SalarioInflacao';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{
        tabBarActiveTintColor: '#00f2f5',
        tabBarActiveBackgroundColor: '#353535',
        tabBarInactiveBackgroundColor: '#d1d6d7',
        tabBarInactiveTintColor: '#000' 
      }}>

        <Tabs.Screen 
          name="Salário" 
          component={ Salario }
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="attach-money" size={24} color={color}/>
            )
          }}
        />

        <Tabs.Screen 
          name="Inflação"
          component={ Inflacao }
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="trending-up" size={24} color={color}/>
            )
          }}
        />
        <Tabs.Screen
          name="Salário x Inflação"
          component={ SalarioInflacao }
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="compare-arrows" size={24} color={color}/>
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
