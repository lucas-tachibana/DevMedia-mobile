import React from "react";
import { ScrollView, Text } from "react-native";
import Historia from './historia';
import Especificacoes from './especificacoes';
import Jogo from "./jogo.js";
import Conclusao from './conclusao';


export default function Xbox() {
    return (
        <ScrollView>
            <Text>Xbox</Text>
            <Historia />
            <Especificacoes />
            <Jogo />
            <Conclusao />
        </ScrollView>
    )
}