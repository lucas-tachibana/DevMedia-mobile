import React from "react";
import { ScrollView, Text } from "react-native";
import Especificacoes from "./especificacoes.js";
import Historia from "./historia.js";
import Conclusao from "./conclusao.js";
import Jogo from "./jogo.js";

export default function Playstation() {
    return (
        <ScrollView>
            <Text>Playstation</Text>
            <Historia />
            <Especificacoes />
            <Jogo />
            <Conclusao />
        </ScrollView>
    )
}