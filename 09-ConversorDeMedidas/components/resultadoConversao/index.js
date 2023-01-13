import React from "react";
import { Text, View } from "react-native";

import estilo from "../../assets/estilos";

export default function ResultadoConversao(){
    return (
        <View style={estilo.containerConversao}>
            <Text style={estilo.titulo}>ResultadoConversao</Text>
        </View>
    )
}