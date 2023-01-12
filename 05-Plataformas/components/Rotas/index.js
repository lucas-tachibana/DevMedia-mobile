import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Xbox from "../Xbox";
import Nintendo from "../Nintendo";
import Playstation from "../Playstation";

import LogoNintendo from '../../assets/logos/nintendo.png';
import LogoPlaystation from '../../assets/logos/ps.png';
import LogoXbox from '../../assets/logos/xbox.png';
import { Image } from "react-native";

const Tabs = createBottomTabNavigator();

export default function Rotas(){
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen 
                    name="Xbox" 
                    component={ Xbox }
                    options={{
                        tabBarIcon: () => (
                            <Image source={ LogoXbox }/>
                        )
                    }}
                />
                <Tabs.Screen 
                    name="Playstation" 
                    component={ Playstation }
                    options={{
                        tabBarIcon: () => (
                            <Image source={ LogoPlaystation }/>
                        )
                    }}
                />
                <Tabs.Screen 
                    name="Nintendo" 
                    component={ Nintendo }
                    options={{
                        tabBarIcon: () => (
                            <Image source={ LogoNintendo }/>
                        )
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}