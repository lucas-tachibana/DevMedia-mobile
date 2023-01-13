import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import KmParaMi from "./pages/Km_mi";
import MiParaKm from "./pages/Mi_km";

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator>
        <Abas.Screen
          name="Quilômetros para Milhas"
          component = { KmParaMi }
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Entypo name="ruler" size={24} color={color} />
            ),
          }}
        />
        <Abas.Screen
          name="Milhas para Quilômetros"
          component = { MiParaKm }
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="ruler-combined" size={24} color={color} />
            ),
          }}
        />
      </Abas.Navigator>
  </NavigationContainer>
  );
}