import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";

import InputConversao from "../../components/inputConversao";
import ResultadoConversao from "../../components/resultadoConversao";



import background from '../../assets/background.jpg'

import estilo from '../../assets/estilos';
export default function Km_mi() {
    return(
        <SafeAreaView>
            <ImageBackground source={background} blurRadius={150} style={estilo.fundo}>
                <InputConversao/>
                <ResultadoConversao/>
            </ImageBackground>
        </SafeAreaView>
    )
}