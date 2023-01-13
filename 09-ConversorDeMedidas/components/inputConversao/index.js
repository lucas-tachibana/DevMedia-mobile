import React from "react";
import { Text, View, TextInput } from "react-native";

import estilo from "../../assets/estilos";
import estiloInput from './estilos';

export default function InputConversao(props){
    return (
        <View style={estilo.containerConversao}>
            <Text style={estilo.titulo}>{props.titulo}</Text>
            <View style={estiloInput.grupoInput}>
                <TextInput 
                    style={estiloInput.input} 
                    keyboardType="decimal-pad"
                    defaultValue="0"
                    onChangeText={props.funcaoTextoAlterado}
                />
                <Text style={estiloInput.label}>{props.medida}</Text>
            </View>
        </View>
    )
}