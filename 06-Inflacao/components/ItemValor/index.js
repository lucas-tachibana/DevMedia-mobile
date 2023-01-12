import React from "react";
import { Text, View } from "react-native";

import estiloGlobal from "../../assets/estilos/estilos";
import estiloValor from "./estilos";

export default function ItemValor(props) {
    return (
        <View style={[estiloGlobal.container, [props.estilo]]}>
            <Text style={estiloValor.textoValor}>{props.ano}</Text>
            <Text style={estiloValor.textoValor}>{props.valor}</Text>
        </View>
    )
}