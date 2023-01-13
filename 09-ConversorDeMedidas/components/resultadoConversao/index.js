import React from "react";
import { Text, View } from "react-native";

import estilo from "../../assets/estilos";
import estiloResultado from "./estilos";

export default function ResultadoConversao(props){
    return (
        <View style={estilo.containerConversao}>
            <Text style={estiloResultado.resultado}>{props.resultado}</Text>
            <Text style={estilo.titulo}>{props.medidaResultado}</Text>
        </View>
    )
}