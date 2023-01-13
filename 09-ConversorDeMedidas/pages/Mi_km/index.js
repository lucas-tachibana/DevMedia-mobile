import React, { useState } from "react";
import { ImageBackground, SafeAreaView } from "react-native";

import InputConversao from "../../components/inputConversao";
import ResultadoConversao from "../../components/resultadoConversao";


import background from '../../assets/background_b.jpeg'

import estilo from '../../assets/estilos';

export default function Mi_km() {
    const [quilometros, setQuilometros] = useState(0);

    function converteMiParaKm(milhas) {
        const resultado = milhas * 1.60;
        setQuilometros(resultado.toFixed(2))
    }
    return(
        <SafeAreaView>
            <ImageBackground source={background} blurRadius={150} style={estilo.fundo}>
                <InputConversao
                    titulo="Conversor de milhas para quilômetros" 
                    medida="milhas"
                    funcaoTextoAlterado={valorInput => converteMiParaKm(valorInput)}
                />
                <ResultadoConversao
                    medidaResultado="Quilômetros"
                    resultado={quilometros}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}