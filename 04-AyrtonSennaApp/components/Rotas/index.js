import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import TelaInicio from "../TelaInicio";
import TelaSobre from "../TelaSobre";
import TelaVitorias from "../TelaVitorias";

const Tabs = createBottomTabNavigator();

export default function Rotas() {
    return(
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#eecb01' },
                    headerTitleStyle: {
                        color: '#000',
                        fontWeight: 'bold'
                    },
                    tabBarActiveTintColor: '#ba1711',
                    tabBarInactiveTintColor: '#000',
                    tabBarActiveBackgroundColor: '#fff',
                    tabBarStyle: {backgroundColor: '#eecb01'}
                }}
            >
                <Tabs.Screen 
                    name="Início" 
                    component= {TelaInicio}
                    options= {{
                        tabBarIcon: ({ color }) => (
                            <Entypo name="home" size={20} color={ color } />
                        )
                    }}
                    />
                <Tabs.Screen 
                    name="Sobre" 
                    component= {TelaSobre}
                    options= {{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name="question-circle" size={20} color={ color } />
                        )
                    }}
                    />
                <Tabs.Screen 
                    name="Vitórias" 
                    component= {TelaVitorias}
                    options= {{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name="trophy" size={20} color={ color } />
                        )
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}