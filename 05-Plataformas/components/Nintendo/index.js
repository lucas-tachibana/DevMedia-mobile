import React from "react";
import { ScrollView, Text } from "react-native";
import Conclusao from "./conclusao.js";
import Especificacoes from "./especificacoes.js";
import Historia from "./historia.js";
import Jogo from "./jogo.js";


export default function Nintendo() {
    return (
        <ScrollView>
            <Text>Nintendo</Text>
            <Historia />
            <Especificacoes />
            <Jogo />
            <Conclusao />
        </ScrollView>
    )
}