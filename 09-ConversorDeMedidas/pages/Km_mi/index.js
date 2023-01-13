import React, { useState } from "react";
import { ImageBackground, SafeAreaView } from "react-native";

import InputConversao from "../../components/inputConversao";
import ResultadoConversao from "../../components/resultadoConversao";



import background from '../../assets/background.jpg'

import estilo from '../../assets/estilos';
export default function Km_mi() {
    const [milhas, setMilhas] = useState(0);

    function converteKMParaMi(quilometros) {
        const valorConvertido = quilometros / 1.60;
        setMilhas(valorConvertido.toFixed(2));
    }

    return(
        <SafeAreaView>
            <ImageBackground source={background} blurRadius={150} style={estilo.fundo}>
                <InputConversao
                    titulo="Conversor de quilômetros para milhas" 
                    medida="quilômetros"
                    funcaoTextoAlterado={valorInput => converteKMParaMi(valorInput)} 
                />
                <ResultadoConversao
                    medidaResultado="Milhas"
                    resultado={milhas}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}