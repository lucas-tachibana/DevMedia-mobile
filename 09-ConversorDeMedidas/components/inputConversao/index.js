import React from "react";
import { Text, View } from "react-native";

import estilo from "../../assets/estilos";

export default function InputConversao(){
    return (
        <View style={estilo.containerConversao}>
            <Text style={estilo.titulo}>InputConversao</Text>
        </View>
    )
}