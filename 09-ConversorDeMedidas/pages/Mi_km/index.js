import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";

import InputConversao from "../../components/inputConversao";
import ResultadoConversao from "../../components/resultadoConversao";


import background from '../../assets/background_b.jpeg'

import estilo from '../../assets/estilos';

export default function Mi_km() {
    return(
        <SafeAreaView>
            <ImageBackground source={background} blurRadius={150} style={estilo.fundo}>
            <InputConversao/>
                <ResultadoConversao/>
            </ImageBackground>
        </SafeAreaView>
    )
}